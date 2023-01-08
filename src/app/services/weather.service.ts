import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // private apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=7.38&longitude=3.91&hourly=temperature_2m,rain,cloudcover_mid&current_weather=true&timezone=${this.continent}/${this.city}`;


  constructor(private http: HttpClient) { }

  
  getWeatherData(continent:string, city:string):Observable<any>{
  return this.http.get(`https://api.open-meteo.com/v1/forecast?latitude=7.38&longitude=3.91&hourly=temperature_2m,rain,cloudcover_mid&current_weather=true&timezone=${continent}/${city}`)
  }
}
