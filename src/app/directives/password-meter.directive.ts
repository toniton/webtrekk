import { Directive, ElementRef, Input, EventEmitter, Renderer2, Optional, Renderer, HostBinding } from '@angular/core';
import { NgModel } from '@angular/forms';
import { OnChanges } from '@angular/core';

@Directive({
    selector: '[passwordMeter]'
})
export class PasswordMeterDirective implements OnChanges {
    progressLoading = false;
    meterStrength = '';
    score = '';

    @Input()
    passwordMeter: NgModel;
    @Input()
    class = '';

    @HostBinding('class')
    get hostClasses(): string {
        return [
            this.class,
            this.meterStrength === 'poor' ? 'bg-danger' : '',
            this.meterStrength === 'weak' ? 'bg-warning' : '',
            this.meterStrength === 'good' ? 'bg-info' : '',
            this.meterStrength === 'strong' ? 'bg-success' : ''
        ].join(' ');
    }

    constructor(
        private el: ElementRef,
        private renderer: Renderer2
    ) {

    }

    ngOnChanges() {
        this.meterStrength = this.checkPassStrength(this.passwordMeter);
    }
    scorePassword(pass) {
        let score = 0;
        if (!pass) {
            return score;
        }

        // award every unique letter until 5 repetitions
        const letters = new Object();
        for (let i = 0; i < pass.length; i++) {
            letters[pass[i]] = (letters[pass[i]] || 0) + 1;
            score += 5.0 / letters[pass[i]];
        }

        // bonus points for mixing it up
        const variations = {
            digits: /\d/.test(pass),
            lower: /[a-z]/.test(pass),
            upper: /[A-Z]/.test(pass),
            nonWords: /\W/.test(pass),
        }

        let variationCount = 0;
        for (const check in variations) {
            if (check) {
                variationCount += (variations[check] === true) ? 1 : 0;
            }
        }
        score += (variationCount - 1) * 10;

        return score;
    }

    checkPassStrength(pass) {
        const score = this.scorePassword(pass);
        this.score = score + '%';
        if (score > 75) {
            return 'strong';
        }
        if (score > 50) {
            return 'good';
        }
        if (score >= 25) {
            return 'weak';
        }
        if (score >= 0) {
            return 'poor';
        }
        return '';
    }
}
