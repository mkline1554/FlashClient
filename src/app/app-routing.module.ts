import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from "./cards/cards/cards.component";
import { CreateCardComponent } from "./cards/create-card/create-card.component";
import { UpdateCardComponent } from "./cards/update-card/update-card.component";
import { CreateDeckComponent } from "./decks/create-deck/create-deck.component";
import { DecksComponent } from "./decks/decks/decks.component";
import { UpdateDeckComponent } from "./decks/update-deck/update-deck.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterAddressComponent } from "./users/register-address/register-address.component";
import { RegisterContactInformationComponent } from "./users/register-contact-information/register-contact-information.component";
import { RegisterNewComponent } from "./users/register-new/register-new.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    //{path: '**', component: HomeComponent, pathMatch: 'full'}, // todo - fix this

    {path: 'login', component: LoginComponent},

    {path: 'register', component: RegisterNewComponent},
    {path: 'register/contact-info', component: RegisterContactInformationComponent},
    {path: 'register/address', component: RegisterAddressComponent},

    {path: 'decks', component: DecksComponent},
    // {path: 'decks/create', component: CreateDeckComponent},
    // {path: 'decks/update', component: UpdateDeckComponent},

    {path: 'cards', component: CardsComponent},
    {path: 'cards/create', component: CreateCardComponent},
    {path: 'cards/update', component: UpdateCardComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}