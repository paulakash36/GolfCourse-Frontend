import { Component, OnInit } from '@angular/core';
import { PlayerServiceService } from '../player-service.service';

@Component({
  selector: 'app-all-players',
  templateUrl: './all-players.component.html',
  styleUrls: ['./all-players.component.css']
})

export class AllPlayersComponent implements OnInit {

  players = [];

  constructor(private playerService: PlayerServiceService) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers() {
    this.playerService.readAll().subscribe(
      (result) => (this.players = result),
      (error) => console.log(error)
    );
  }
}
