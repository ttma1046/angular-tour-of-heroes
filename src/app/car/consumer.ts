import { Car } from './car';
import { Engine2 } from './Engine2';
import { Tires } from './tires';

export class Consumer {
   public bigCylinders: number = 12;

   constructor() {
       let car = new Car(new Engine2(this.bigCylinders), new Tires());
   }

}
