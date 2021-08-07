import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-new',
  templateUrl: './register-new.component.html',
  styleUrls: ['./register-new.component.css']
})

export class RegisterNewComponent implements OnInit {

  registerForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    username: '',
    password: ''
  });

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
  }

  register(){
    this.http.post<any>('https://localhost:44369/api/Users/Register', this.registerForm.value)
      .subscribe(res => {
        if (res.success){
          localStorage.setItem('userId', res.userId);
          localStorage.setItem('username', res.username);
          this.router.navigate(['register/contact-info'])
        }
        else{
          // show error
        }
    });
  }

}
