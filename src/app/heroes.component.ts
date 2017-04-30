import { Component, OnInit } from '@angular/core';
import { Hero } from './core/hero';
import { HeroService } from './core/hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    selectedHero: Hero;
    heroes: Hero[];
    title = 'Tour of Heroes';

    constructor(private heroService: HeroService) {
		// code...
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroesSlowly().then((result: Hero[]) => this.heroes = result);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
