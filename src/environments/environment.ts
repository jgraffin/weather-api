import { Data } from "src/app/services/enum";

export const environment = {
  production: false
};

export const SERVER_URL = `http://api.weatherapi.com/v1/current.json?key=${Data.key}`

