import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    console.log(hero);
    this.selectedHero = hero;
  };

  constructor(http: Http){
    http.get('http://damrey.com:3000/api/archives/34441.json')
    .map(res => res.json())
    .subscribe(hoge => {
      console.log(hoge);
      alert("hoge");
    });
  };

}

export class Hero {
  id: number;
  name: string;
}
