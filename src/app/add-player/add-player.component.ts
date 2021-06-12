import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerServiceService } from '../player-service.service';
import { TournamentServiceService } from '../tournament-service.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  tournaments = [];

  playerForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    age: new FormControl(),
    city: new FormControl(),
    emailId: new FormControl(),
    experience: new FormControl(),
    tournamentId: new FormControl()
  });

  constructor(
    private playerService: PlayerServiceService,
    private tournamentService: TournamentServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadTournaments();
  }

  loadTournaments() {
    this.tournamentService.readAll().subscribe(
      (result) => (this.tournaments = result),
      (error) => console.log(error)
    );
  }
  get id() {
    return this.playerForm.get('id');
  }
  get name() {
    return this.playerForm.get('name');
  }
  get age() {
    return this.playerForm.get('age');
  }
  get city() {
    return this.playerForm.get('city');
  }
  get emailId() {
    return this.playerForm.get('emailId');
  }
  get experience() {
    return this.playerForm.get('experience');
  }
  get tournamentId() {
    return this.playerForm.get('tournamentId');
  }

  onsubmit(formData) {
    let data = new FormGroup({
      id: new FormControl(formData.id),
      name: new FormControl(formData.name),
      age: new FormControl(formData.age),
      city: new FormControl(formData.city),
      emailId: new FormControl(formData.emailId),
      experience: new FormControl(formData.experience),
      tournamentId: new FormControl(formData.tournamentId)
    });

    this.playerService.add(data.value).subscribe(
      () => {
        this.playerForm.reset();
        this.router.navigate(['/players']);
      },
      (error) => console.log(error)
    );
  }

}
