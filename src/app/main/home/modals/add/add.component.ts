import { Component, OnInit, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ModalComponent } from '../../../../widgets/modal/modal.component';
import { Customer } from '../../../../models/customer';
import { CustomerService } from '../../../../services/customer.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent extends ModalComponent implements OnInit {
  public model: Customer = new Customer();
  public formLoading = false;

  @ViewChild('addForm')
  form: NgForm;
  @Input()
  backdrop = 'static';
  @Output()
  onSubmitted: EventEmitter<any> = new EventEmitter();

  constructor(
    private elem: ElementRef,
    private customerService: CustomerService
  ) {
    super(elem);
  }

  ngOnInit() {
  }

  submitForm = (value) => {
    this.formLoading = true;
    this.customerService.createCustomer(value)
      .subscribe(this.successCallback, this.errorCallback);
  }

  successCallback = (response) => {
    this.formLoading = false;
    if (this.onSubmitted) {
      this.onSubmitted.emit(response);
    }
    this.form.resetForm();
    this.hide();
  }

  errorCallback = () => {
    this.formLoading = false;
    console.log('An error occured');
  }

}
