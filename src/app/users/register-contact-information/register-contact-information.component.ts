import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-contact-information',
  templateUrl: './register-contact-information.component.html',
  styleUrls: ['./register-contact-information.component.css']
})
export class RegisterContactInformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let userId = localStorage.getItem('userId');
    console.log(userId);
  }

}
