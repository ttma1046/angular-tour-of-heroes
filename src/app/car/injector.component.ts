import { Component, OnInit, Injector } from '@angular/core';
import { Car } from '../car/Car';
import { Engine } from '../car/engine';
import { Tires } from '../car/tires';
import { Logger } from '../logger.service';
import { heroServiceProvider } from '../../heroes/hero.service.provider';
import { HeroService } from '../../heroes/hero.service';
import { Hero } from '../../heroes/hero';

@Component({
  selector: 'my-injectors',
  template: `
  <h2>Other Injections</h2>
  <div id="car">{{car.drive()}}</div>
  <div id="hero">{{hero.name}}</div>
  <div id="rodent">{{rodent}}</div>
  `,
  providers: [Car, Engine, Tires, heroServiceProvider, Logger]
})
export class InjectorComponent implements OnInit {
  car: Car;
  heroService: HeroService;
  hero: Hero;

  constructor(private injector: Injector) { }

  ngOnInit() {
    this.car = this.injector.get(Car);
    this.heroService = this.injector.get(HeroService);
    this.hero = this.heroService.getHeroes()[0];
  }

  get rodent() {
    let rousDontExist = `R.O.U.S.'s? I don't think they exist!`;
    return this.injector.get(ROUS, rousDontExist);
  }
}
