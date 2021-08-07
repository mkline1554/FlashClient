import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser = '';

  constructor(private authenticationService: AuthenticationService) {
    authenticationService.userValue.subscribe(currentUser => {
      this.currentUser = currentUser;
    })
   }

  ngOnInit(): void {
  }

  logout(){
    this.authenticationService.currentUser = '';
    this.authenticationService.currentUserId = '';
  }

}
