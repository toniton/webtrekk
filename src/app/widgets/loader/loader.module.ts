import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderService } from '../../widgets/loader/loader.service';
import { LoaderComponent } from '../../widgets/loader/loader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoaderComponent
  ],
  exports: [LoaderComponent],
  providers: [
    LoaderService
  ]
})
export class LoaderModule { }
