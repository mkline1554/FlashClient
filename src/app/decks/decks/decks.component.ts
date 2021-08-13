import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-decks',
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.css']
})
export class DecksComponent implements OnInit {

  decks: any;
  deck: any;

  viewDecks: boolean = true;
  updateDeck: boolean = false;
  createDeck: boolean = false;
  viewMine: boolean = true;

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
      console.log(this.decks);
    })
  }

  onDeckSelected(deckId: number){

    this.deck = this.decks.find((x: { id: number; }) => x.id == deckId);
    console.log(this.deck);
    this.viewDecks = false;
    this.updateDeck = true;
  }

}
