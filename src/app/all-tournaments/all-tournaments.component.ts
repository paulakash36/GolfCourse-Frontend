import { Component, OnInit } from '@angular/core';
import { TournamentServiceService } from '../tournament-service.service';

@Component({
  selector: 'app-all-tournaments',
  templateUrl: './all-tournaments.component.html',
  styleUrls: ['./all-tournaments.component.css']
})
export class AllTournamentsComponent implements OnInit {
  tournaments = [];

  constructor(private tournamentService: TournamentServiceService) { }

  ngOnInit(): void {
    this.getTournaments();
  }

  getTournaments() {
    this.tournamentService.readAll().subscribe(
      (result) => (this.tournaments = result),
      (error) => console.log(error)
    );
  }
}
