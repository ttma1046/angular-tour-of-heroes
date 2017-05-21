import { Inject } from '@angular/core';
import { Car } from './car';
import { Engine2 } from './Engine2';
import { Tires } from './tires';
import { APP_CONFIG, AppConfig } from '../app-config';


export class Consumer {
   public bigCylinders: number = 12;
   public title: string;

   constructor(@Inject(APP_CONFIG) config: AppConfig) {
       this.title = config.title;
       let car = new Car(new Engine2(this.bigCylinders), new Tires());
   }

}
