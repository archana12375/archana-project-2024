import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { CustomerDetails, customer } from '../models/customer-details';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
customerForm
  : FormGroup = new FormGroup({});
  public customer:customer=new customer();
  isDisabled: boolean = true; 
  isEditable: boolean[] = [];
  printSectionvisible:boolean=false;
  constructor(private fb: FormBuilder,private customerservice:CustomerService){
    this.customerForm = this.fb.group({ 
      CustomerId:[''] ,
      customerList: this.fb.array([])
    })
    
  }

  ngOnInit(): void {
    this.GetCustomerDetails();
  }
  get customerList(): FormArray {
    return this.customerForm.get('customerList') as FormArray;
  }
 

  GetCustomerDetails(){
    debugger
    this.customerservice.GetCustomerData().subscribe(data_ => {     
     this.customer=data_;
           
      this.customer.Details.forEach((data) => {

        this.getcustomerList(data.CustomerCode, data.Name, data.Address, data.Email, data.MobileNo, data.GeoLocation);
      })

    })
  }
  getcustomerList(CustomerCode?: number,Name?: string,Address?: string,Email?: string,MobileNo?: string, GeoLocation?: string) {
    const CustomerArray = this.customerForm.get('customerList') as FormArray;
    CustomerArray.push(this.addData(CustomerCode, Name, Address, Email, MobileNo, GeoLocation));

    
  }
  addData(CustomerCode?: number,Name?: string,Address?: string,Email?: string,MobileNo?: string, GeoLocation?: string) {
    
    const controls: any = {
      CustomerCode: [CustomerCode || 0],
      Name: [Name || ''],
      Address: [Address || ''],
      Email: [Email || false],
      MobileNo: [MobileNo || ''],
      GeoLocation: [GeoLocation || ''],
    };
    console.log(controls);
    return this.fb.group(controls);
  }
  
  searchCustomer( ){
   var customerId:string=this.customerForm.get('CustomerId')?.value
   const customerArray = this.customerForm.get('customerList') as FormArray;
   customerArray.clear();

   this.customerservice.GetCustomerDataById(customerId).subscribe(data_ => {     
    this.customer=data_;          
     this.customer.Details.forEach((data) => {
       this.getcustomerList(data.CustomerCode, data.Name, data.Address, data.Email, data.MobileNo, data.GeoLocation);
     })
   })
  }
  goBack(){}
  Edit(index: number){
  this.isEditable[index]=true;
  }
  
  update(index: number){
    const customerFormGroup = this.customerList.at(index) as FormGroup;
    const customerData:CustomerDetails = customerFormGroup.value; 
    const customerArray = this.customerForm.get('customerList') as FormArray;
    customerArray.clear();

    this.customerservice.updateCustomer(customerData).subscribe(data_ => {     
      this.customer=data_;          
       this.customer.Details.forEach((data) => {
         this.getcustomerList(data.CustomerCode, data.Name, data.Address, data.Email, data.MobileNo, data.GeoLocation);
       })
     })
  }
  Cancel(index: number){
    this.isEditable[index]=false;
    }
    

  Delete(index: number){
    const customerFormGroup = this.customerList.at(index) as FormGroup;
    const customerData:CustomerDetails = customerFormGroup.value; 
    const customerArray = this.customerForm.get('customerList') as FormArray;
    customerArray.clear();

    this.customerservice.deleteCustomer(customerData.CustomerCode).subscribe(data_ => {     
      this.customer=data_;          
       this.customer.Details.forEach((data) => {
         this.getcustomerList(data.CustomerCode, data.Name, data.Address, data.Email, data.MobileNo, data.GeoLocation);
       })
     })
  }
}
