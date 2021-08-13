import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-contact-information',
  templateUrl: './register-contact-information.component.html',
  styleUrls: ['./register-contact-information.component.css']
})

export class RegisterContactInformationComponent implements OnInit {

  //address:Address = new Address();

  contactInformationForm = this.formBuilder.group({
    email: '',
    phoneNumber: '',
    facebook: '',
    twitter: '',
    instagram: '',
    linkedIn: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
    ) {}

  ngOnInit(): void {
  }

  updateContactInformation(){

    // this.address.email = this.contactInformationForm.value.email;
    // this.address.phoneNumber = this.contactInformationForm.value.phoneNumbe;
    // this.address.facebook = this.contactInformationForm.value.facebook;
    // this.address.twitter = this.contactInformationForm.value.twitter;
    // this.address.instagram = this.contactInformationForm.value.instagram;
    // this.address.linkedIn = this.contactInformationForm.value.linkedIn

    this.http.put<any>('https://localhost:44369/api/users/updatecontactinformation', this.contactInformationForm.value)
      .subscribe(res => {
        if (res.success){
          this.router.navigate(['register/address'])
        }
        else{
          // show error
        }
    });
  }

}
