import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from './../../services/weather-service.service';
import { DogService } from './../../services/dog-service.service';
import { RickmortyService } from './../../services/rickmorty-service.service';
import { TriviaService } from './../../services/trivia-service.service';
import { BadService } from './../../services/bad-service.service';
import 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  providers: [WeatherService, DogService, RickmortyService, TriviaService, BadService]
})
export class DashboardPageComponent implements OnInit {

  public weatherDetail: Array<any>;
  public dogDetail: Array<any>;
  public rickmortyDetail: Array<any>;
  public triviaDetail: Array<any>;
  public badDetail: Array<any>;

  constructor(protected router: Router, protected weatherService: WeatherService, protected dogService: DogService, protected rickmortyService: RickmortyService, protected triviaService: TriviaService, protected badService: BadService) {
   }

  ngOnInit() {
    if (!sessionStorage.getItem('AuthToken')) {
      this.router.navigate(['/']);
    }
    this.weatherService.getWeekForecast()
    .subscribe(
      weather => {
      this.weatherDetail = weather.consolidated_weather;
    });
    this.dogService.getDogs()
    .subscribe(
      dog => {
      this.dogDetail = dog.cards;
    });
    this.rickmortyService.getRickmorty()
    .subscribe(
      rickmorty => {
      this.rickmortyDetail = rickmorty.results;
      }
    );
    this.triviaService.getTrivia()
    .subscribe(
      trivia => {
      this.triviaDetail = trivia.results;
      }
    );
    this.badService.getBad()
    .subscribe(
      bad => {
      this.badDetail = bad;
      }
    );
  }
}
