import {
  Directive, ElementRef, OnInit, HostBinding,
  Output, EventEmitter, ChangeDetectorRef, OnDestroy
} from '@angular/core';
import { NgModel } from '@angular/forms';

declare let $;

@Directive({
  selector: '[ngModel][appDatePicker]',
  providers: [NgModel]
})
export class DatePickerDirective implements OnInit, OnDestroy {
  @HostBinding('value')
  dateValue;

  @Output()
  ngModelChange: EventEmitter<any> = new EventEmitter();

  constructor(
    private el: ElementRef,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    $(this.el.nativeElement).datepicker({
      format: 'yyyy-mm-dd',
      autoclose: true,
      todayBtn: 'linked',
      todayHighlight: true
    }).datepicker('setDate', new Date(this.dateValue)).on('changeDate', (e) => {
      const val = e.target.value;
      this.updateValue(val)
    });
  }

  updateValue = (val) => {
    this.dateValue = val;
    this.ngModelChange.emit(val);
    this.cdRef.detectChanges();
  }

  ngOnDestroy() {
    $(this.el.nativeElement).datepicker('destroy');
  }

}
