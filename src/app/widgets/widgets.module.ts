import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModule } from '../widgets/alert/alert.module';
import { LoaderModule } from '../widgets/loader/loader.module';
import { BadgeComponent } from './badge/badge.component';
import { ModalComponent } from './modal/modal.component';
import { CardItemComponent } from './card-item/card-item.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';

@NgModule({
  imports: [
    CommonModule,
    AlertModule,
    LoaderModule
  ],
  declarations: [BadgeComponent, ModalComponent, CardItemComponent, FilterBarComponent],
  exports: [
    BadgeComponent,
    ModalComponent,
    CardItemComponent,
    FilterBarComponent,
    AlertModule,
    LoaderModule
  ]
})
export class WidgetsModule { }
