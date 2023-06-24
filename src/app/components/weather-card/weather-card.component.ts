import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { IWeather } from 'src/app/interfaces/iweather.interface';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent  implements OnInit {
  @Input() city?: IWeather

  constructor() { }

  ngOnInit() {}

}
