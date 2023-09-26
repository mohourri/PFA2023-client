import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }
  baseUrl : string = "http://localhost:8082"

  getData(): Observable<any> {
      console.log("hey")
      return this.http.get(`${this.baseUrl}/commandes`);
    }
}
