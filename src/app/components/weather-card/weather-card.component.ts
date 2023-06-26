import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IWeather } from 'src/app/interfaces/iweather.interface';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent {
  @Input() city?: IWeather;
  @Output() onRemoveCity: EventEmitter<EventListener> = new EventEmitter();

  constructor() { }

  handleClick() {
    this.onRemoveCity.emit();
  }
}
