import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllPlayersComponent } from './all-players/all-players.component';
import { AllTournamentsComponent } from './all-tournaments/all-tournaments.component';
import { PlayerServiceService } from './player-service.service';
import { TournamentServiceService } from './tournament-service.service';
import { HttpClientModule } from '@angular/common/http';
import { PrizedTournamentComponent } from './prized-tournament/prized-tournament.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AllPlayersInTournamentComponent } from './all-players-in-tournament/all-players-in-tournament.component';

@NgModule({
  declarations: [
    AppComponent,
    AllPlayersComponent,
    AllTournamentsComponent,
    PrizedTournamentComponent,
    AddPlayerComponent,
    AllPlayersInTournamentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PlayerServiceService, TournamentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
