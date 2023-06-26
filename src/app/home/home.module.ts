import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { WeatherCardModule } from '../components/weather-card/weather-card.module';
import { ModalModule } from '../components/modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    WeatherCardModule,
    ModalModule,
  ],
  providers: [],
  declarations: [HomePage]
})
export class HomePageModule {}
