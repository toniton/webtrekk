import {
  Directive, Input, OnInit, HostBinding,
  ElementRef, AfterViewInit, Renderer2,
  SimpleChanges, OnChanges, DoCheck, OnDestroy, HostListener
} from '@angular/core';


@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[loading]'
})
export class LoadingButtonDirective implements OnInit, OnChanges, OnDestroy {
  public buttonText = '';
  @HostBinding('style.min-width.px')
  public width: number;
  @HostBinding('disabled')
  @HostBinding('class.loading')
  @Input()
  public loading = false;
  @HostListener('click')
  onClick() {
    this.width = this.el.nativeElement.offsetWidth;
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.buttonText = this.el.nativeElement.innerHTML;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.loading.firstChange) {
      return;
    }
    if (!changes.loading.firstChange && changes.loading.currentValue) {
      this.renderer.setProperty(this.el.nativeElement,
        'innerHTML',
        '<span><span class="loading-dot">•</span><span class="loading-dot">•</span><span class="loading-dot">•</span></span>');
    } else {
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.buttonText);
    }
  }

  ngOnDestroy() {
    console.log('destroyed');
  }
}
