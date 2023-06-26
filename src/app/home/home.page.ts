import { Component, OnInit } from '@angular/core';
import { IWeather } from '../interfaces/iweather.interface';
import { WeatherService } from '../services/weather.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalComponent } from '../components/modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  cities: string[] = ['Curitiba', 'Sorocaba', 'Amsterdã', 'Salvador'];
  citiesInfo: any = [];
  errorMessage = '';
  errorOnSubmitCity = '';
  hasAvailableCities = true;

  constructor(
    private weatherService: WeatherService,
    private router: Router,
    public modalCtrl: ModalController
  ) {}

  ngOnInit(): void {
    this.onLoadData();
  }

  onLoadData() {

    // get all data based on initial state `citiesInfo` array
    this.cities.map((city) =>
      this.weatherService
        .getCities(city)
        .subscribe((item) => (this.citiesInfo = [...this.citiesInfo, item]))
    );
  }

  onRemoveCity(city: IWeather) {

    // get selected city to be deleted from `citiesInfo` array
    const { name } = city.location;

    const selected = this.citiesInfo.filter(
      (item: IWeather) => !item.location.name.includes(name)
    );

    this.citiesInfo = selected;

    // if `citiesInfo` === 0 then show message and hide button at the bottom
    if (this.citiesInfo.length === 0) {
      this.hasAvailableCities = !this.hasAvailableCities;
    }

    this.hasAvailableCities = !!this.hasAvailableCities;
  }

  onRefreshPage() {

    // used when there's no option to refresh the interface in order to get data
    window.location.reload();
  }

  onLogout() {

    // just a trick to logout user
    this.router.navigate(['/login']);
  }

  async openModal() {

    // to add a new city to the list, by using modalController api
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
