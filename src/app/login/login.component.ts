import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  login(){
    this.http.post<any>('https://localhost:44369/api/User/Login', this.loginForm.value)
      .subscribe(res => {
        if (res.success){
          this.authenticationService.currentUser = res.username;
          this.authenticationService.currentUserId = res.userId;
          
          this.router.navigate(['decks'])
        }
        else{
          // show error
        }
    });
  }

}
