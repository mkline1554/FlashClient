import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-address',
  templateUrl: './register-address.component.html',
  styleUrls: ['./register-address.component.css']
})
export class RegisterAddressComponent implements OnInit {

  addressForm = this.formBuilder.group({
    streetAddress1: '',
    streetAddress2: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  })

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  updateAddress(){
    this.http.put<any>('https://localhost:44369/api/users/updateaddress', this.addressForm.value)
      .subscribe(res => {
        if (res.success){
          this.router.navigate(['decks']);
        }
      });
  }

}
