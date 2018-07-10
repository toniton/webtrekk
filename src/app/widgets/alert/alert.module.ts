import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { AlertService } from '../../widgets/alert/alert.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlertComponent],
  exports: [
    AlertComponent
  ]
})
export class AlertModule { }
