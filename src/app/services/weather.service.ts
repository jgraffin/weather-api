import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IWeather } from '../interfaces/iweather.interface';
import { Data } from './enum';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = `https://api.weatherapi.com/v1/current.json?key=${Data.key}&lang=pt`

  constructor(private http: HttpClient) {}

  getCities(cityName: string): Observable<IWeather> {
    return this.http.get<IWeather>(`${this.apiUrl}&q=${cityName}`);
  }
}
