import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PlayerServiceService {

  baseUrl = 'http://localhost:5000/api/player';
  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }
  add(data): Observable<any> {
    return this.httpClient.post(this.baseUrl, data);
  }
  update(name, data): Observable<any> {
    return this.httpClient.put(this.baseUrl, data);
  }
  delete(name): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}?name=${name}`);
  }
}
