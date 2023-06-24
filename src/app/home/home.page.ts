import { Component, OnInit } from '@angular/core';
import { IWeather } from '../interfaces/iweather.interface';
import { WeatherService } from '../services/weather.service';
import { tap, switchMap, map, catchError } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  cities: string[] = [
    'Curitiba',
    'London',
    'Sorocaba',
    'Amsterdã'
  ]
  citiesInfo?: any = []

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.cities.forEach((city) => {
      this.weatherService.getCities(city).subscribe((item) => {
        let value = [...this.citiesInfo, item];
        this.citiesInfo = value;
        console.log(value);
      })
    })

  }
}
