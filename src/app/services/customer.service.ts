import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { endpoints } from '../config/endpoint';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
import { ApiResponse } from '../config/api-response';

@Injectable()
export class CustomerService {

    constructor(private http: HttpClient) { };

    getCustomer(id: any = null): Observable<Customer> {
        return this.http
            .get<ApiResponse>(`${environment.API_URL}:${environment.API_PORT}/${environment.PREFIX}/${endpoints.CUSTOMER}/${id}`)
            .map(response => new Customer().deserialize(response.data));
    };

    getCustomers(page: any = null): Observable<ApiResponse> {
        if (page !== null) {
            return this.http
                .get<ApiResponse>(`${environment.API_URL}:${environment.API_PORT}/${environment.PREFIX}/${endpoints.CUSTOMER}`, {
                    params: {
                        page: page
                    }
                });
        }
        return this.http.get<ApiResponse>(`${environment.API_URL}:${environment.API_PORT}/${environment.PREFIX}/${endpoints.CUSTOMER}`);
    };

    createCustomer(customer: Customer): Observable<Customer> {
        return this.http
            .post<Customer>(
                `${environment.API_URL}:${environment.API_PORT}/${environment.PREFIX}/${endpoints.CUSTOMER}`
                , customer
            );
    };

    updateCustomer(customer: Customer): Observable<Customer> {
        return this.http
            .put<ApiResponse>(
                `${environment.API_URL}:${environment.API_PORT}/${environment.PREFIX}/${endpoints.CUSTOMER}/${customer._id}`
                , customer
            ).map(response => response.data);
    };

    deleteCustomer(id: string): Observable<Customer> {
        return this.http
            .delete<Customer>(
                `${environment.API_URL}:${environment.API_PORT}/${environment.PREFIX}/${endpoints.CUSTOMER}/${id}`
            );
    };
}
