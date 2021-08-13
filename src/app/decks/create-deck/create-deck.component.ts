import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-deck',
  templateUrl: './create-deck.component.html',
  styleUrls: ['./create-deck.component.css']
})

export class CreateDeckComponent implements OnInit {

  createDeckForm = this.formBuilder.group({
    name: '',
    category: '',
    isPublic: ''
  })

  showPublicMessage: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  create(){
    console.log(this.createDeckForm.value);
    this.http.post<any>('https://localhost:44369/api/decks/create', this.createDeckForm.value)
      .subscribe(res => {
        if (res.success){
          this.router.navigate(['decks']);
        }
      });
  }

  togglePublicMessage(){
    this.showPublicMessage = !this.showPublicMessage;
  }

}
