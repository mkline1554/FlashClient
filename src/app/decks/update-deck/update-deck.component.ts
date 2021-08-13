import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-deck',
  templateUrl: './update-deck.component.html',
  styleUrls: ['./update-deck.component.css']
})
export class UpdateDeckComponent implements OnInit {

  @Input() deck: any;

  updateMode: boolean = true;
  addCardMode: boolean = false;

  updateForm = this.formBuilder.group({
    name: '',
    category: '',
    isPublic: ''
  })

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,    
    private router: Router
    ) { }

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      name: this.deck.name,
      category: this.deck.category,
      isPublic: this.deck.isPublic
    })
    console.log(this.updateForm);
  }

  update(){
    this.http.put<any>('https://localhost:44369/api/decks/update', this.updateForm.value)
    .subscribe(res => {
      if (res.success){
        //this.router.navigate(['decks']);
      }
    });
  }

  addCard(){
    this.updateMode = false;
    this.addCardMode = true;
  }

}
