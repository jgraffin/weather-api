import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { SERVER_URL } from 'src/environments/environment';
import { IWeather } from '../interfaces/iweather.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = 'https://api.weatherapi.com/v1/current.json?key=5c8052703ee7482183d124753232406&lang=pt'

  constructor(private http: HttpClient) {}

  getCities(cityName: string): Observable<IWeather> {
    return this.http.get<IWeather>(`${this.apiUrl}&q=${cityName}`);
  }
}
