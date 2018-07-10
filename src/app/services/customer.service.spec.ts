import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { CustomerService } from './customer.service';
import { endpoints } from '../config/endpoint';
import { environment } from '../../environments/environment';
import { Customer } from '../models/customer';

describe('CustomerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CustomerService]
    });
  });

  it('should be created', inject([CustomerService], (service: CustomerService) => {
    expect(service).toBeTruthy();
  }));

  it('should get customers', inject([HttpTestingController, CustomerService],
    (httpMock: HttpTestingController, service: CustomerService) => {
      const mockCustomers: Customer[] = [
        new Customer().deserialize({
          birthday : '2018-07-10',
          customerLifetimeValue : 201,
          gender : 'm',
          lastContact : '2017-06-01T23:28:56.782Z',
          name : { first: 'Peter', last: 'Smithragg' },
          _id : '5b3bd4f8e7179a1ccf3bf3e5'
        }),
        new Customer().deserialize({
          birthday : '2011-04-18',
          customerLifetimeValue : 40,
          gender : 'f',
          lastContact : '2017-06-01T23:28:56.782Z',
          name : { first: 'Smith', last: 'Alan' },
          _id : '5b3bd4f8e7179a1ccf3bf3e6'
        })
      ];
      service.getCustomers().subscribe((response) => {
        // expect(response.data).toEqual(mockCustomers);
      });

      const mockReq = httpMock.expectOne(`${environment.API_URL}:${environment.API_PORT}/${environment.PREFIX}/${endpoints.CUSTOMER}`);
      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
      mockReq.flush(mockCustomers);

      httpMock.verify();
    }));
});
