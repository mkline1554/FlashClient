import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'Flash App';
  // users: any;

  constructor(private http: HttpClient) {   
  }

  ngOnInit(): void {
    // this.http.get('https://localhost:44369/api/user/get')
    //   .subscribe(res => {
    //     this.users = res;
    //   }, error => {
    //     console.error(error);
    //   })
  }
}
