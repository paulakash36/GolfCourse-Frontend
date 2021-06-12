import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizedTournamentComponent } from './prized-tournament.component';

describe('PrizedTournamentComponent', () => {
  let component: PrizedTournamentComponent;
  let fixture: ComponentFixture<PrizedTournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrizedTournamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizedTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
