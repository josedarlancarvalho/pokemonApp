import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeAPIService {
  private baseUrl = 'https://pokeapi.co/api/v2/';

  constructor(private httpClient: HttpClient) {}

  getPokeAPIService(id: number = Math.floor(Math.random() * 100)): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}pokemon/${id}/`);
  }

  getPokemonList(limit: number = 20): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}pokemon?limit=${limit}`);
  }

  getPokemonDetails(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}pokemon/${id}`);
  }
}
