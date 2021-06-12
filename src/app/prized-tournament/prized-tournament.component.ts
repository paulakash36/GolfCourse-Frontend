import { Component, OnInit } from '@angular/core';
import { TournamentServiceService } from '../tournament-service.service';

@Component({
  selector: 'app-prized-tournament',
  templateUrl: './prized-tournament.component.html',
  styleUrls: ['./prized-tournament.component.css']
})
export class PrizedTournamentComponent implements OnInit {

  prizedTour = [];

  constructor(private tournamentService: TournamentServiceService) { }

  ngOnInit(): void {
    this.getPrizedTournaments();
  }

  getPrizedTournaments() {
    this.tournamentService.readByPrize().subscribe(
      (result) => (this.prizedTour = result),
      (error) => console.log(error)
    );
  }
}
