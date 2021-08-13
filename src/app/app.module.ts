import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';

// Cards
import { UpdateCardComponent } from './cards/update-card/update-card.component';
import { CardsComponent } from './cards/cards/cards.component';
import { CreateCardComponent } from './cards/create-card/create-card.component';

// Decks
import { DecksComponent } from './decks/decks/decks.component';
import { CreateDeckComponent } from './decks/create-deck/create-deck.component';
import { UpdateDeckComponent } from './decks/update-deck/update-deck.component';

// Users
import { RegisterNewComponent } from './users/register-new/register-new.component';
import { RegisterContactInformationComponent } from './users/register-contact-information/register-contact-information.component';
import { RegisterAddressComponent } from './users/register-address/register-address.component';

// Misc
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ViewDecksComponent } from './decks/view-decks/view-decks.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UpdateCardComponent,
    CardsComponent,
    DecksComponent,
    CreateCardComponent,
    CreateDeckComponent,
    UpdateDeckComponent,
    HeaderComponent,
    RegisterNewComponent,
    RegisterContactInformationComponent,
    RegisterAddressComponent,
    HomeComponent,
    ViewDecksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
