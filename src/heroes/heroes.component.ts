import { Component, Optional } from '@angular/core';
import { Inject } from '@angular/core';
// import { HeroService } from './hero.service';

import { heroServiceProvider } from './hero.service.provider';
import { APP_CONFIG, HERO_DI_CONFIG, AppConfig } from '../app/app-config';
import { Logger } from '../app/logger.service';

@Component({
    selector: 'my-heroes',
    template: `
        <h2>Heroes</h2>
        <hero-list></hero-list>
     `,
    providers: [
        heroServiceProvider,
        { provide: APP_CONFIG, useValue: HERO_DI_CONFIG }
    ]
})
export class HeroesComponent {
    public title: string;

    constructor(@Inject(APP_CONFIG) config: AppConfig, @Optional() private logger: Logger) {
       this.title = config.title;
       
       let some_message = 'log some logs';
       if (this.logger) {
          this.logger.log(some_message);
       }
    }
}
