import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from './customer.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [
        CustomerService
    ]
})
export class ServicesModule { }
