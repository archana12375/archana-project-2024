import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CustomerDetails, customer } from '../models/customer-details';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl: string ="https://localhost:7045/api/"
  constructor(
    private http: HttpClient
  ) { }

  GetCustomerData(): Observable<customer> {
    const labelUrl = `${this.apiUrl}customers/GetCustomerData`;
    return this.http.get<customer>(labelUrl);
  }
  GetCustomerDataById(customerid:string): Observable<customer> {
    const labelUrl = `${this.apiUrl}customers/GetCustomerDataById/`+customerid;
    return this.http.get<customer>(labelUrl);
  }
  updateCustomer(customerDetails:CustomerDetails): Observable<any> {
    const url = `${this.apiUrl}customers/updateCustomer`;
    return this.http.put(url, customerDetails);
  }
  deleteCustomer(customerCode: number): Observable<any> {
    const url = `${this.apiUrl}customers/deleteCustomer/${customerCode}`;
    return this.http.delete(url);
  }
  
  addCustomer(customerData:CustomerDetails):Observable<string>{
    const url = `${this.apiUrl}customers/addCustomer`;
    return this.http.post<string>(url,customerData);
  }
}
