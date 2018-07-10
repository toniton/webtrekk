import {
    Component, OnInit, OnDestroy, ViewChild
} from '@angular/core';
import { Router } from '@angular/router';
import { FLY_IN_OUT_LIST } from '../../config/animations';
import { Observable } from 'rxjs/Observable';
import { DeleteComponent } from './modals/delete/delete.component';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';
import { ApiResponse } from '../../config/api-response';

@Component({
    templateUrl: './home.component.html',
    styleUrls: [
        './home.component.scss'
    ],
    animations: [
        FLY_IN_OUT_LIST()
    ]
})
export class HomeComponent implements OnInit {
    public customers$: Observable<Array<Customer>>;
    public itemsCount = 0;
    public currentPage = 0;
    public totalCount = 0;
    public previous = null;
    public next = null;

    @ViewChild('deleteCustomer') deleteModal: DeleteComponent;

    constructor(
        private router: Router,
        private customerService: CustomerService
    ) { }

    ngOnInit(): void {
        this.loadPage();
    }

    gotoDetails = (customer: Customer) => {
        this.router.navigate(['/details', customer._id], {
            queryParams: {
                edit: true
            }
        })
    }

    loadPage = (page: number = 0) => {
        this.customers$ = this.customerService.getCustomers(page)
            .do((response: ApiResponse) =>
            this.setupPagination(response.data.length,
                response.index, response.next,  response.previous, response.count))
            .map((response) => response.data);
    }

    setupPagination = (noOfItems, currentIndex, nextIndex, previousIndex, totalCount) => {
        this.currentPage = currentIndex;
        this.totalCount = totalCount;
        this.next = nextIndex;
        this.previous = previousIndex;
        if (nextIndex === null) {
            this.itemsCount = totalCount;
            return;
        }
        this.itemsCount = noOfItems * (nextIndex - 1);
    }

    showDeleteModal = (customer) => {
        this.deleteModal.showDeleteModal(customer._id);
    }
}
