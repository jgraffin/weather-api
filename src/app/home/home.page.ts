import { Component, OnInit, ViewChild } from '@angular/core';
import { IWeather } from '../interfaces/iweather.interface';
import { WeatherService } from '../services/weather.service';
import { IonModal } from '@ionic/angular';
import { catchError } from 'rxjs';
import { EMPTY } from 'rxjs/internal/observable/empty'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonModal) modal?: IonModal;

  cities: string[] = ['Curitiba', 'Sorocaba', 'Amsterdam', 'Sergipe'];
  citiesInfo: any = [];
  cityName = '';
  wrongCityName = false;
  hasAvailableCities = true;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.onLoadData();
  }

  onLoadData() {
    this.cities.forEach((city) => {
      this.weatherService.getCities(city).subscribe((item) => {
        let value = [...this.citiesInfo, item];
        this.citiesInfo = value;
        console.log('onLoadData()', value);
      });
    });
  }

  onAddCity() {
    let city = this.cityName;

    if (!city) {
      return;
    }

    console.log('dasd aquiiii');

    this.weatherService
      .getCities(city)
      .pipe(
        catchError((err) => {
          if (err.status === 400) {
            console.log('nome de cidade nao existe')
            this.wrongCityName = true;
          }

          return EMPTY;
        })
      )
      .subscribe({
        next: (res) => {
            let value = [...this.citiesInfo, res];
            this.citiesInfo = value;
        },
        error: (err) => console.log(err)
      });

    this.modal?.dismiss('confirm');
  }

  onRemoveCity(selected: IWeather) {
    const { name } = selected.location;

    let selectedCity = this.citiesInfo.filter(
      (item: IWeather) => !item.location.name.includes(name)
    );

    this.citiesInfo = selectedCity;

    if (this.citiesInfo.length === 0) {
      this.hasAvailableCities = !this.hasAvailableCities;
    }

    this.hasAvailableCities = !!this.hasAvailableCities;
  }

  onRefreshPage() {
    window.location.reload();
  }

  onCancel() {
    this.modal?.dismiss(null, 'cancel');
  }

  onWillDismiss() {
    this.cityName = '';
    this.onAddCity();
  }
}
