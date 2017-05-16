import { Component, OnInit, Input } from '@angular/core';

@Component(
{
	selector: 'hola-component',
	templateUrl: './hola.component.html'
})
export class HolaComponent implements OnInit {
	OutputSize: number = 20;

	fontSizePx: number = 15;

	currentClasses: {};

	currentStyles: {};

	canSave: boolean = true;

	isUnchanged: boolean = false;

	isSpecial: boolean = true;

	constructor() {
		// code...
	}

	ngOnInit(): void {
		this.setCurrentClasses();
		this.setCurrentStyles();
	}

	output(size: number): void {
		this.OutputSize = size;
	}

	setCurrentClasses() {
		this.currentClasses = {
			saveable: this.canSave,
			modified: !this.isUnchanged,
			special: this.isSpecial
		}
	}

	setCurrentStyles() {
		this.currentStyles = {
			'font-style': this.canSave ? 'italic': 'normal',
			'font-weight': !this.isUnchanged ? 'bold': 'normal',
			'font-size': this.isSpecial ? '24px': '12px'
		}
	}
}
