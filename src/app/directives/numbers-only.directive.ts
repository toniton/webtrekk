import { Directive, HostListener } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'input[numbersOnly]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NumbersOnlyDirective, multi: true }]
})
export class NumbersOnlyDirective implements Validator {

  @HostListener('keydown', ['$event'])
  onKeyDown(event): boolean {
    const e = <KeyboardEvent>event;
    const keyCode: any = e.which || e.keyCode || e.code || e.charCode;
    // if(typeof)
    if ([46, 8, 9, 27, 13, 110, 190].indexOf(parseInt(keyCode, 10)) !== -1 ||
      // Allow: Ctrl+A
      (keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+C
      (keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+V
      (keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+X
      (keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
      // Allow: home, end, left, right
      (keyCode >= 35 && keyCode <= 39)) {
      // let it happen, don't do anything
      return true;
    }

    // // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (keyCode < 48 || keyCode > 57)) && (keyCode < 96 || keyCode > 105)) {
      e.preventDefault();
      return false;
    }
    return true;
  }


  @HostListener('input', ['$event'])
  onInputChange(e) {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').trim();
    e.target.focus();
  }

  constructor() { }

  validate(c: AbstractControl): { [key: string]: any; } {
    if ((/[^\dA-Z]/g.test(c.value))) {
      return {
        numbersOnly: {
          valid: false
        }
      }
    }
    return null;
  }

  registerOnValidatorChange?(fn: () => void): void {
    console.log('validator changed');
  }
}
