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
  showCreateDeck: boolean = false;
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
    })
  }

  onDeckSelected(deckId: number){
    this.deck = this.decks.find((x: { id: number; }) => x.id == deckId);
    this.viewDecks = false;
    this.updateDeck = true;
  }

  toggleShowCreateForm(){
    this.showCreateDeck = !this.showCreateDeck;
    this.viewDecks = false;
  }

  toggleViewAll(){
    this.viewDecks = !this.viewDecks;
    this.showCreateDeck = false;
  }

}
