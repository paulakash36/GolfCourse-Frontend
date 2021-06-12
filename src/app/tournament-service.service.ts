import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TournamentServiceService {

  baseUrl = 'http://localhost:5000/api/Tournament';

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }
  readByPrize(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/prize`);
  }
  add(data): Observable<any> {
    return this.httpClient.post(this.baseUrl, data);
  }
  getPlayersInTournament(tourId): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/search/?tourId=${tourId}`);
  }
}
