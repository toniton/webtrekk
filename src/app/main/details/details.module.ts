import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DetailsRoutingModule } from './details.routing';
import { DirectivesModule } from '../../directives/directives.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    DetailsRoutingModule,
    CommonModule,
    FormsModule,
    DirectivesModule
  ],
  declarations: [DetailsComponent]
})
export class DetailsModule { }
