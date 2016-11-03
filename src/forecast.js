import axios from 'axios';

import { WEATHER_API_KEY } from '../config';

const uri = `http://api.wunderground.com/api/${WEATHER_API_KEY}/forecast/q/NY/Newark.json`;

export default function forecast() {
  return axios
    .get(uri)
    .then(response => response.data)
    .then(body => body
        .simpleforecast
        .forecastday
        .map(day => ({
          rain: day.pop,
          temperature: day.high.fahrenheit,
          icon: day.icon,
        })))
    .catch(error => console.error(error));
}