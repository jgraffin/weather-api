import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherCardComponent } from './weather-card.component';

@NgModule({
  declarations: [ WeatherCardComponent ],
  exports: [ WeatherCardComponent ],
  imports: [ CommonModule ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class WeatherCardModule {}
