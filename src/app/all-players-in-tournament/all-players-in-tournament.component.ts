import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlayerServiceService } from '../player-service.service';
import { TournamentServiceService } from '../tournament-service.service';

@Component({
  selector: 'app-all-players-in-tournament',
  templateUrl: './all-players-in-tournament.component.html',
  styleUrls: ['./all-players-in-tournament.component.css']
})

export class AllPlayersInTournamentComponent implements OnInit {

  playerInTournament = new FormGroup({
    tourId: new FormControl(null, Validators.required)
  });

  players = [];
  get tourId() {
    return this.playerInTournament.get('tourId');
  }
  constructor(private tournamentService: TournamentServiceService) { }

  ngOnInit(): void {

  }
  onsubmit(data) {
    this.players = [];
    this.tournamentService.getPlayersInTournament(data.tourId).subscribe(
      (result) => {
        this.players = result;
        console.log(this.players);
      },
      (error) => console.log(error)
    )

  }
}

