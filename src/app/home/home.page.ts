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
  cities: string[] = ['Curitiba', 'Londres', 'Sorocaba', 'Amsterdã'];
  hasAvailableCities = true;
  citiesInfo?: any = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.cities.forEach((city) => {
      this.weatherService.getCities(city).subscribe((item) => {
        let value = [...this.citiesInfo, item];
        this.citiesInfo = value;
        console.log(value);
      });
    });


  }

  onRemoveCity(selected: IWeather) {
    const { name } = selected.location;

    let remove = this.citiesInfo.filter(
      (item: IWeather) => !item.location.name.includes(name)
    );

    this.citiesInfo = remove;

    if (this.citiesInfo.length === 0) {
      this.hasAvailableCities = !this.hasAvailableCities;
    }
  }

  onRefreshPage() {

  }
}
