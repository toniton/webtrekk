import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullLayoutComponent } from '../core/layouts/full-layout/full-layout.component';
import { PartialLayoutComponent } from '../core/layouts/partial-layout/partial-layout.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PartialHeaderComponent } from './headers/partial-header/partial-header.component';
import { FormsModule } from '@angular/forms';
import { UtilityModule } from '../utility/utility.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UtilityModule,
    RouterModule
  ],
  declarations: [
    FullLayoutComponent,
    PartialLayoutComponent,
    NotFoundComponent,
    PartialHeaderComponent
  ],
  exports: [
    FullLayoutComponent,
    PartialLayoutComponent,
    NotFoundComponent
  ]
})
export class CoreModule { }
