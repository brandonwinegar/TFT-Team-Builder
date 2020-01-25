import { champion } from './interfaces';
import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TFT Team Builder';

  champs: Observable<champion[]>;

  team: champion[] = [];
  constructor(private http: HttpClient){
    this.getChampions();
  }
  getChampions(){
    console.log("getting champs")
    this.champs = this.http.get<champion[]>('assets/champion.json')
  }
  addToTeam(champ:champion){
    console.log(champ)
    this.team.push(champ)
  }
  removeFromTeam(champ:champion){
    this.team = this.team.filter(champion => champion !== champ)
  }
}
