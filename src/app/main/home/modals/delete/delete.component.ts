import { Component, OnInit, ElementRef, Input, EventEmitter, Output } from '@angular/core';
import { ModalComponent } from '../../../../widgets/modal/modal.component';
import { CustomerService } from '../../../../services/customer.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent extends ModalComponent implements OnInit {
  public formLoading = false;

  @Input()
  itemId: string;
  @Output()
  onDeleted: EventEmitter<any> = new EventEmitter();

  constructor(
    private elem: ElementRef,
    private customerService: CustomerService
  ) {
    super(elem);
  }

  showDeleteModal = (id) => {
    this.itemId = id;
    this.show();
  }

  deleteItem = (id) => {
    this.formLoading = true;
    this.customerService.deleteCustomer(id)
      .subscribe(this.successCallback, this.errorCallback);
  }

  successCallback = (response) => {
    this.formLoading = false;
    if (this.onDeleted) {
      this.onDeleted.emit(response);
    }
    this.hide();
  }

  errorCallback = () => {
    this.formLoading = false;
    console.log('An error occured');
  }

}
