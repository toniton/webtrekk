import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MinMaxModule } from 'angular2-minmax-validators';
import { DirectivesModule } from '../../directives/directives.module';
import { WidgetsModule } from '../../widgets/widgets.module';
import { UtilityModule } from '../../utility/utility.module';
import { DeleteComponent } from './modals/delete/delete.component';
import { AddComponent } from './modals/add/add.component';
import { HomeCcomponentComponent } from './home-ccomponent/home-ccomponent.component';

@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    FormsModule,
    DirectivesModule,
    WidgetsModule,
    UtilityModule,
    MinMaxModule
  ],
  declarations: [HomeComponent, DeleteComponent, AddComponent, HomeCcomponentComponent],
})
export class HomeModule { }
