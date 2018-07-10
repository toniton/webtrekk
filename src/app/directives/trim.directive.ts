import { Directive, Renderer, ElementRef, Renderer2, HostListener, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, DefaultValueAccessor, ControlValueAccessor } from '@angular/forms';

export const TRIM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TrimDirective),
  multi: true
};

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'input[trim]',
  providers: [TRIM_VALUE_ACCESSOR]
})
export class TrimDirective extends DefaultValueAccessor implements ControlValueAccessor {
  @Input()
  public strip = false;
  onChange = (_) => { };

  @HostListener('blur', ['$event'])
  onTouched = () => { };


  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    super(renderer, elementRef, false);
  }

  @HostListener('paste', ['$event'])
  onPaste(event: any) {
    const element: HTMLInputElement = event.target;
    const content = event.clipboardData.getData('text/plain');
    let val = content.trim();
    if (this.strip) {
      val = this.stripText(val);
    }
    this.renderer.setAttribute(this.elementRef.nativeElement, 'value', val);
    this.onChange(val);
    return false;
  }

  @HostListener('input', ['$event'])
  onInput(event: any) {
    const element: HTMLInputElement = event.target;
    const content = element.value;
    let val = content.trim();
    if (this.strip) {
      val = this.stripText(val);
    }
    this.renderer.setAttribute(this.elementRef.nativeElement, 'value', val);
    this.onChange(val);
    return;
  }

  stripText(text: string) {
    return text.replace(/\s/g, '');
  }

  writeValue(value: any): void {
    if (value != null) {
      super.writeValue(value.toString().trim());
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

}
