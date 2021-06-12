import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPlayersInTournamentComponent } from './all-players-in-tournament.component';

describe('AllPlayersInTournamentComponent', () => {
  let component: AllPlayersInTournamentComponent;
  let fixture: ComponentFixture<AllPlayersInTournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPlayersInTournamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPlayersInTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
