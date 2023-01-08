import { Component, OnInit,Input  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  @Input() selectedContinent!: string;
  @Input() selectedCity!: string;

  continent: string = 'Africa';
  city: string = 'Lagos';

    constructor(private weatherService: WeatherService) {
      // this.continent = 'Utopia';
      // this.city = 'Freetown';

     }

  title = 'my-weather-app-';
  currentTime = `${new Date().getHours()} : ${new Date().getMinutes()}`;
  currentHour = new Date().getHours()

  hourDenomination:string = '';

  weatherInfo:any;

  ngOnInit(): void {
    if(this.currentHour >= 12){
      this.hourDenomination = "PM";
    }
    else{
      this.hourDenomination = "AM";
    };

   this.weatherService.getWeatherData(this.continent, this.city).subscribe(data=> (
    this.weatherInfo = data
   )  );
  };

  getCountryData(data1: string, data2: string){
    this.continent = data1;
    this.city = data2;
    console.log('here', this.weatherInfo);
    console.log('yeah babay', this.continent, this.city);
  }






}
