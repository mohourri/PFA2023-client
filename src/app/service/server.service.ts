import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }
  baseUrl : string = "http://localhost:8082"

  getAllCommandes(): Observable<any> {
      console.log("hey")
      return this.http.get(`${this.baseUrl}/commandes`);
    }
  getNoValidatedCommandes(): Observable<any> {
      console.log("hey")
      return this.http.get(`${this.baseUrl}/no-validated-commandes`);
  }

  validateCommande(id: number): Observable<any> {
    console.log("Le ID est :" + id);
    console.log(`${this.baseUrl}/validate/${id}`);

    // Send a GET request with the ID as part of the URL path
    return this.http.get(`${this.baseUrl}/validate/${id}`);
  }

  /// Articles
  getArticles(): Observable<any> {
    console.log("hey")
    return this.http.get(`${this.baseUrl}/articles`);
  }

  /// Arrivages
  getArrivages(): Observable<any> {
    console.log("hey")
    return this.http.get(`${this.baseUrl}/arrivages`);
  }

  /// Fournisseurs
  getFournisseurs(): Observable<any> {
    console.log("hey")
    return this.http.get(`${this.baseUrl}/fournisseurs`);
  }
}
