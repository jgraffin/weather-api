import {
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
  forwardRef,
} from '@angular/core';
import { IWeather } from '../interfaces/iweather.interface';
import { WeatherService } from '../services/weather.service';
import { IonModal, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalComponent } from '../components/modal/modal.component';
import { WeatherCardComponent } from '../components/weather-card/weather-card.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  cities: string[] = ['Curitiba', 'Sorocaba', 'Amsterdã', 'Salvador'];
  citiesInfo: any = [];
  cityName = '';
  errorMessage = '';
  wrongCityName = false;
  hasAvailableCities = true;
  errorOnSubmitCity = '';

  constructor(
    private weatherService: WeatherService,
    private router: Router,
    public modalCtrl: ModalController
  ) {}

  ngOnInit(): void {
    this.onLoadData();
  }

  onLoadData() {
    this.cities.map((city) =>
      this.weatherService
        .getCities(city)
        .subscribe((item) => (this.citiesInfo = [...this.citiesInfo, item]))
    );
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

  onLogout() {
    this.router.navigate(['/login']);
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      const value = this.citiesInfo.some(
        (item: IWeather) =>
          item.location.name.toLowerCase() === data.toLowerCase()
      );

      if (!value) {
        this.weatherService.getCities(data).subscribe({
          next: (res) => {
            this.citiesInfo = [...this.citiesInfo, res];
            this.errorOnSubmitCity = '';
          },
          error: (err) => {
            console.log(err);
            this.errorOnSubmitCity = 'Cidade inválida';
          },
        });
      } else {
        this.errorOnSubmitCity = `${data} já existe na lista. Tente outra por favor.`;
      }
    }
  }
}
