import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { CustomerDetails } from '../models/customer-details';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit{
  addCustomer: FormGroup = new FormGroup({});
  GeoLocation: string="";
  customerData:CustomerDetails=new CustomerDetails();
  response:string="";
constructor(private formBuilder: FormBuilder,private customerservice:CustomerService,private router: Router){
this.GeoLocation="";
}
  ngOnInit(): void {
    this.addCustomer = this.formBuilder.group({
      Name: ['', [Validators.required, Validators.maxLength(100)]],
      Address: ['', [Validators.required, Validators.maxLength(200)]],
      Email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      MobileNo: ['', [Validators.required, Validators.pattern('^\\d{10}$')]],      
      GeoLocation: ['', [Validators.required, Validators.maxLength(50)]]
    });   
    this.getGeoLocation();
  }
  getGeoLocation(): void {   
    if (navigator.geolocation) {      
      navigator.geolocation.getCurrentPosition((position) => {
        this.GeoLocation = `${position.coords.latitude}, ${position.coords.longitude}`;
        this.addCustomer.patchValue({
          GeoLocation: this.GeoLocation
        
        });
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }
  Submit(){
    debugger
    console.log(this.addCustomer.value);
    if (this.addCustomer.valid){
      this.customerData.Name=this.addCustomer.get('Name')?.value
      this.customerData.Address=this.addCustomer.get('Address')?.value
      this.customerData.Email=this.addCustomer.get('Email')?.value
      this.customerData.MobileNo=this.addCustomer.get('MobileNo')?.value
      this.customerData.GeoLocation=this.addCustomer.get('GeoLocation')?.value
      this.customerservice.addCustomer(this.customerData).subscribe(data => {
               this.router.navigateByUrl('customer');
      })
    }
    else{
      Object.keys(this.addCustomer.controls).forEach((addCustomer) => {
        this.addCustomer.get(addCustomer)?.markAsTouched();
      });
    }
  }
}
