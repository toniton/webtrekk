import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WidgetsModule } from '../../widgets/widgets.module';
import { DirectivesModule } from '../../directives/directives.module';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomerService } from '../../services/customer.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Customer } from '../../models/customer';

describe('DetailsComponent', () => {
  let route: ActivatedRoute;
  let router: Router;
  let service: CustomerService;
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WidgetsModule, DirectivesModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [DetailsComponent],
      providers: [
        CustomerService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: Observable.of({ id: 123 }),
            queryParams: Observable.of({
              edit: 'true'
            })
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    route = TestBed.get(ActivatedRoute);
    router = TestBed.get(Router);
    service = TestBed.get(CustomerService);
    fixture.detectChanges();
    spy = spyOn(service, 'getCustomer').and.returnValue(Observable.of(
      new Customer().deserialize({
        data: {
          birthday: '2018-07-10',
          customerLifetimeValue: 201,
          gender: 'm',
          lastContact: '2017-06-01T23:28:56.782Z',
          name: { first: 'Peter', last: 'Smithragg' },
          _id: 123
        }
      })
    ));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    fixture.detectChanges();
  });

  it('shouldve subscribed to route params', () => {
    const routeSubSpy = spyOn(component, 'subscribeToRouteParams');
    component.ngAfterViewInit();
    expect(component.subscribeToRouteParams).toHaveBeenCalled();
  });

  it('route params should call customer service', () => {
    component.subscribeToRouteParams();
    expect(service.getCustomer).toHaveBeenCalledWith(123);
    fixture.detectChanges();
  });

  it('query params should change edit to true', fakeAsync(() => {
    component.subscribeToQueryParams();
    expect(component.edit).toEqual(true);
    fixture.detectChanges();
  }));

  it('component getCustomer should call service getCustomer', fakeAsync(() => {
    component.getCustomer(1);
    expect(service.getCustomer).toHaveBeenCalledWith(1);
    fixture.detectChanges();
  }));

  it('should merge model object with data passed in', () => {
    component.setModelValues(new Customer().deserialize({
      birthday: '2018-07-10',
      customerLifetimeValue: 201,
      gender: 'm',
      lastContact: '2017-06-01T23:28:56.782Z',
      name: { first: 'Peter', last: 'Smithragg' },
      _id: 123
    }));
    expect(component.model.getFullName()).toEqual(new Customer().deserialize({
      birthday: '2018-07-10',
      customerLifetimeValue: 201,
      gender: 'm',
      lastContact: '2017-06-01T23:28:56.782Z',
      name: { first: 'Peter', last: 'Smithragg' },
      _id: 123
    }).getFullName());
    fixture.detectChanges();
  });

  it('should navigate to details page with edit mode false', () => {
    const routerSpy = spyOn(router, 'navigate');
    component.gotoEditDetails(1, false);
    const url = routerSpy.calls.first().args[0];
    expect(url).toEqual(['/details', 1]);
    fixture.detectChanges();
  });

  it('shouldve called success callback', fakeAsync(() => {
    const customer = new Customer().deserialize({
      birthday: '2018-07-10',
      customerLifetimeValue: 201,
      gender: 'm',
      lastContact: '2017-06-01T23:28:56.782Z',
      name: { first: 'Peter', last: 'Smithragg' },
      _id: 123
    });

    const callbackSpy = spyOn(component, 'successCallback');
    const serviceSpy = spyOn(service, 'updateCustomer').and.returnValue(Observable.of(customer));

    component.saveCustomer(customer);
    tick();
    expect(serviceSpy).toHaveBeenCalled();
    tick();
    expect(callbackSpy).toHaveBeenCalled();
    fixture.detectChanges();
  }));

  it('shouldve called set formloading and model', () => {
    const routerSpy = spyOn(router, 'navigate');
    component.model._id = '123';
    component.successCallback({});
    const url = routerSpy.calls.first().args[0];
    expect(url).toEqual(['/details', '123']);
    expect(component.formLoading).toBe(false);
    fixture.detectChanges();
  });

  it('shouldve called error callback', fakeAsync(() => {
    const customer = new Customer().deserialize({
      birthday: '2018-07-10',
      customerLifetimeValue: 201,
      gender: 'm',
      lastContact: '2017-06-01T23:28:56.782Z',
      name: { first: 'Peter', last: 'Smithragg' },
      _id: 123
    });
    const serviceSpy = spyOn(service, 'updateCustomer').and.returnValue(Observable.throw(false));
    const callbackSpy = spyOn(component, 'errorCallback');
    component.saveCustomer(customer);
    tick();
    expect(serviceSpy).toHaveBeenCalled();
    expect(callbackSpy).toHaveBeenCalled();
    fixture.detectChanges();
  }));

  it('shouldve called set formloading and model', () => {
    component.errorCallback({});
    expect(component.formLoading).toBe(false);
    fixture.detectChanges();
  });

});
