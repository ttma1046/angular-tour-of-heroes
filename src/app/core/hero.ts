export class Hero {

    constructor(
        public id: number,
        public name: string,
        public power: string,
        public alterEgo?: string
    ) { }

    createOneHero () {
        const myHero = new Hero(42, 'skyDog', 'Fetch any object at any distance', 'Leslie Rollover');
        console.log('My hero is called ' + myHero.name);
    }
}
