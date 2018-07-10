import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrimDirective } from '../directives/trim.directive';
import { NumbersOnlyDirective } from '../directives/numbers-only.directive';
import { EqualValidator } from '../directives/equal-validator.directive';
import { DatePickerDirective } from './date-picker.directive';
import { LoadingButtonDirective } from './loading-button.directive';
import { PasswordMeterDirective } from './password-meter.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TrimDirective, NumbersOnlyDirective, EqualValidator, DatePickerDirective, LoadingButtonDirective, PasswordMeterDirective],
  exports: [TrimDirective, NumbersOnlyDirective, EqualValidator, DatePickerDirective, LoadingButtonDirective, PasswordMeterDirective]
})
export class DirectivesModule { }
