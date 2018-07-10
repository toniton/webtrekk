import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { FLY_IN_OUT_LIST_PARENT } from '../../config/animations';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';
import * as _ from 'lodash';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [
    FLY_IN_OUT_LIST_PARENT()
  ]
})
export class DetailsComponent implements OnInit, AfterViewInit {
  public edit = false;
  public formLoading = false;
  public model: Customer = new Customer();
  public customer$: Observable<Customer>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.subscribeToRouteParams();
    this.subscribeToQueryParams();
  }

  subscribeToRouteParams = () => {
    this.route.params.subscribe((params) => {
      const id = params.id;
      if (id) {
        this.customer$ = this.getCustomer(id);
      }
    });
  }

  getCustomer = (id) => {
    return this.customerService.getCustomer(id)
      .do((data: Customer) => this.setModelValues(data));
  }

  subscribeToQueryParams = () => {
    this.route.queryParams.subscribe((params) => {
      const edit = params.edit;
      if (edit === 'true') {
        this.edit = true;
      } else {
        this.edit = false;
      }
    });
  }

  setModelValues = (data: Customer) => {
    this.model = _.merge(this.model, data);
  }

  gotoEditDetails = (id, edit = false) => {
    if (edit) {
      this.router.navigate(['/details', id], {
        queryParams: {
          edit: true
        }
      });
      return;
    }
    this.router.navigate(['/details', id]);
    this.customer$ = this.getCustomer(id);
  }

  saveCustomer = (customer: Customer) => {
    this.formLoading = true;
    this.customerService.updateCustomer(customer)
      .do((data: Customer) => this.setModelValues(data))
      .subscribe(this.successCallback, this.errorCallback);
  }

  successCallback = (response) => {
    this.formLoading = false;
    this.gotoEditDetails(this.model._id, false);
  }

  errorCallback = (error) => {
    this.formLoading = false;
  }

}
