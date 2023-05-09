import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

    public heroes: string[] = ['A', 'B', 'C', 'D', 'E', 'F'];
    public deletedHero?:string;

    removeLastHero():void {
      this.deletedHero = this.heroes.pop();
    }

  }
