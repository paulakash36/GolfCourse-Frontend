import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlayerComponent } from './add-player/add-player.component';
import { AllPlayersInTournamentComponent } from './all-players-in-tournament/all-players-in-tournament.component';
import { AllPlayersComponent } from './all-players/all-players.component';
import { AllTournamentsComponent } from './all-tournaments/all-tournaments.component';
import { PrizedTournamentComponent } from './prized-tournament/prized-tournament.component';

const routes: Routes = [
  { path: 'players', component: AllPlayersComponent },
  { path: 'tournaments', component: AllTournamentsComponent },
  { path: 'tournaments/prize', component: PrizedTournamentComponent },
  { path: 'allPlayersInTournament', component: AllPlayersInTournamentComponent },
  { path: 'player/addPlayer', component: AddPlayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
