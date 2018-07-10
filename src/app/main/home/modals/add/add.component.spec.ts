import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { AddComponent } from './add.component';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from '../../../../directives/directives.module';
import { WidgetsModule } from '../../../../widgets/widgets.module';
import { CustomerService } from '../../../../services/customer.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Customer } from '../../../../models/customer';
import { Observable } from 'rxjs/Rx';

describe('AddComponent', () => {
  let component: AddComponent;
  let service: CustomerService;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DirectivesModule, WidgetsModule, FormsModule, HttpClientTestingModule],
      declarations: [AddComponent],
      providers: [CustomerService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    service = TestBed.get(CustomerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit form and callback', fakeAsync(() => {
    const customer = new Customer().deserialize({
      birthday: '2018-07-10',
      customerLifetimeValue: 201,
      gender: 'm',
      lastContact: '2017-06-01T23:28:56.782Z',
      name: { first: 'Peter', last: 'Smithragg' },
      _id: 123
    });
    const serviceSpy = spyOn(service, 'createCustomer').and.returnValue(Observable.of(customer));
    component.submitForm(customer);
    expect(serviceSpy).toHaveBeenCalled();
  }));

  it('should reset form and hide', () => {
    const submittedSpy = spyOn(component.onSubmitted, 'emit');
    const formSpy = spyOn(component.form, 'resetForm');
    const hideSpy = spyOn(component, 'hide');
    component.successCallback(null);
    expect(component.formLoading).toBe(false);
    expect(submittedSpy).toHaveBeenCalled();
    expect(formSpy).toHaveBeenCalled();
    expect(hideSpy).toHaveBeenCalled();
    fixture.detectChanges();
  });

  it('should set formLoading to false on error callback', () => {
    component.errorCallback();
    expect(component.formLoading).toBe(false);
    fixture.detectChanges();
  });
});
