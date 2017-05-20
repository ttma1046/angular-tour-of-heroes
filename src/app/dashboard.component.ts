import { Component, OnInit, Input } from '@angular/core';

import { Hero } from './hero/hero';
import { HeroService } from './hero/hero.service';

@Component(
{
	selector: 'my-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	heroes: Hero[] = [];

	OutputSize: number = 20;

	fontSizePx: number = 15;

	constructor(private heroService: HeroService) {
		// code...
	}

	ngOnInit(): void {
		this.heroService.getHeroes()
			.then(heroes => this.heroes = heroes.slice(1, 5));
	}

	output(size: number): void {
		this.OutputSize = size;
	}
}
