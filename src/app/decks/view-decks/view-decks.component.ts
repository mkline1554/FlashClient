import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-decks',
  templateUrl: './view-decks.component.html',
  styleUrls: ['./view-decks.component.css']
})

export class ViewDecksComponent implements OnInit {

  @Input() decks: any;
  @Output() deckSelected = new EventEmitter<number>();

  constructor(    
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.http.get<any>('https://localhost:44369/api/decks/get')
      .subscribe(res => {
        if (res.success){
          this.decks = res.decks;
        }
        else{
          this.decks = null;
        }
      })
  }

  updateDeck(e: number){
    this.deckSelected.emit(e);
  }

}
