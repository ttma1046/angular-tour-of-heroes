import { Engine } from './engine';
import { Tires } from './tires';
import { Car } from './car';
import { HeroService } from '../../heroes/hero.service';
import { HeroListComponent } from '../hero-list.component';

export class Test {
    let car = new Car(new MockEngine(), new MockTires());

    constructor() {
        // code...
    }
    
    let expectedHeroes = [{name: 'A'}, {name: 'B'}];

    let mockService = <HeroService> { getHeroes: () => expectedHeroes };

    it('should have heroes when HeroListComponent created', () => {
        let hlc = new HeroListComponent(mockService);
        expect(hlc.heroes.length).toEqual(expectedHeroes.length);
    });
}

class MockEngine extends Engine {
    cylinders = 8;
}

class MockTires extends Tires {
    make = 'YokoGoodStore';
}
