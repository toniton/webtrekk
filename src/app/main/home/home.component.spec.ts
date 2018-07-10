import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { FilterBarComponent } from '../../widgets/filter-bar/filter-bar.component';
import { CardItemComponent } from '../../widgets/card-item/card-item.component';
import { AddComponent } from './modals/add/add.component';
import { DeleteComponent } from './modals/delete/delete.component';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from '../../directives/directives.module';
import { ModalComponent } from '../../widgets/modal/modal.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import { Customer } from '../../models/customer';
import { Observable } from 'rxjs/Rx';
import { ApiResponse } from '../../config/api-response';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;
  let service: CustomerService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, DirectivesModule, BrowserAnimationsModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [
        HomeComponent, FilterBarComponent, ModalComponent,
        CardItemComponent, AddComponent, DeleteComponent
      ],
      providers: [
        CustomerService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    service = TestBed.get(CustomerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit shouldve called loadpage', () => {
    const loadSpy = spyOn(component, 'loadPage');
    component.ngOnInit()
    expect(loadSpy).toHaveBeenCalled();
  });

  it('should navigate to details page with edit mode true', () => {
    const customer = new Customer().deserialize({
      birthday: '2018-07-10',
      customerLifetimeValue: 201,
      gender: 'm',
      lastContact: '2017-06-01T23:28:56.782Z',
      name: { first: 'Peter', last: 'Smithragg' },
      _id: 123
    });
    const routerSpy = spyOn(router, 'navigate');
    component.gotoDetails(customer);
    const url = routerSpy.calls.first().args[0];
    expect(url).toEqual(['/details', 123]);
    fixture.detectChanges();
  });

  it('should call loadpage service', fakeAsync(() => {
    const customer = new Customer().deserialize({
      birthday: '2018-07-10',
      customerLifetimeValue: 201,
      gender: 'm',
      lastContact: '2017-06-01T23:28:56.782Z',
      name: { first: 'Peter', last: 'Smithragg' },
      _id: 123
    });
    const customer1 = new Customer().deserialize({
      birthday: '2018-07-10',
      customerLifetimeValue: 201,
      gender: 'm',
      lastContact: '2017-06-01T23:28:56.782Z',
      name: { first: 'Peter', last: 'Smithragg' },
      _id: 124
    });
    const routerSpy = spyOn(service, 'getCustomers').and.returnValue(
      Observable.of(<ApiResponse>{
        data: <Customer[]>[],
        count: 0,
        index: 1,
        next: null,
        previous: null
      })
    );
    component.loadPage();
    tick();
    expect(routerSpy).toHaveBeenCalled();
    fixture.detectChanges();
  }));

  it('should call setup pagination', () => {
    component.setupPagination(2, 1, null, null, 2);
    expect(component.previous).toBe(null);
    fixture.detectChanges();
  });

  it('should initiate delete modal', () => {
    const customer = new Customer().deserialize({
      birthday: '2018-07-10',
      customerLifetimeValue: 201,
      gender: 'm',
      lastContact: '2017-06-01T23:28:56.782Z',
      name: { first: 'Peter', last: 'Smithragg' },
      _id: 123
    });
    const modalSpy = spyOn(component.deleteModal, 'show');
    component.showDeleteModal(customer);
    expect(modalSpy).toHaveBeenCalled();
    fixture.detectChanges();
  });

});
