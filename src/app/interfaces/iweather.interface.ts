export interface IWeather {
  location: {
    "name": string,
  },
  current: {
    "vis_km": number,
    "precip_mm": number,
    "pressure_mb": number,
    "temp_c": number,
    "condition": {
      "text": string,
      "icon": string,
    }
  }
}
