import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { DeleteComponent } from './delete.component';
import { WidgetsModule } from '../../../../widgets/widgets.module';
import { UtilityModule } from '../../../../utility/utility.module';
import { DirectivesModule } from '../../../../directives/directives.module';
import { CustomerService } from '../../../../services/customer.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable } from 'rxjs/Rx';

describe('DeleteComponent', () => {
  let component: DeleteComponent;
  let service: CustomerService;
  let fixture: ComponentFixture<DeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DirectivesModule, WidgetsModule, UtilityModule, HttpClientTestingModule],
      declarations: [DeleteComponent],
      providers: [CustomerService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteComponent);
    component = fixture.componentInstance;
    service = TestBed.get(CustomerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show delete modal', () => {
    const showSpy = spyOn(component, 'show');
    component.showDeleteModal(1);
    expect(component.itemId).toEqual(1);
    expect(showSpy).toHaveBeenCalled();
  });

  it('should delete item', fakeAsync(() => {
    const serviceSpy = spyOn(service, 'deleteCustomer').and.returnValue(Observable.of(true));
    component.deleteItem(1);
    expect(serviceSpy).toHaveBeenCalled();
  }));

  it('should emit response', () => {
    const submittedSpy = spyOn(component.onDeleted, 'emit');
    const hideSpy = spyOn(component, 'hide');
    component.successCallback(null);
    expect(component.formLoading).toBe(false);
    expect(submittedSpy).toHaveBeenCalled();
    expect(hideSpy).toHaveBeenCalled();
    fixture.detectChanges();
  });

  it('should set formLoading to false on error callback', () => {
    component.errorCallback();
    expect(component.formLoading).toBe(false);
    fixture.detectChanges();
  });
});
