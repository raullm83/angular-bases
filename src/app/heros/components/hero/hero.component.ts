import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public nombre:string = 'iron man';
  public edad:number = 30;

  public showButtonName:boolean = true;
  public showButtonAge:boolean = true;

  getHeroDescription() :string {
    return `${this.nombre} is a ${this.edad} young adventurer`;
  }

  capitalizado() :string{
    return this.nombre.toUpperCase();
  }

  changeHero():void{
    this.nombre = 'spiderman';
    this.showButtonName = false;
  }

  changeAge():void{
    this.edad = 25;
    this.showButtonAge = false;
  }

  reset():void{
    this.nombre = 'iron man';
    this.edad = 30;
    this.showButtonName = true;
    this.showButtonAge = true;
  }
}
