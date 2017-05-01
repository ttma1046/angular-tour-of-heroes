import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

    constructor(private heroService: HeroService, private router: Router) {
		// code...
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes().then((result: Hero[]) => this.heroes = result);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
