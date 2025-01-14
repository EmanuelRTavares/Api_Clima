import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Registrar automaticamente como um provedor global
})
export class WeatherService {
  private apiUrl = 'http://localhost:3000/weather'; // URL da API

  constructor(private http: HttpClient) {}

  getWeather(cidade: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { cidade });
  }
}
 