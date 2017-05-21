import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.modules';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroSearchComponent } from './hero-search.component';
import { HeroFormComponent } from './hero-form.component';
import { SizerComponent } from './sizer.component';
import { HolaComponent } from './hola.component';

import { HeroService } from './hero/hero.service';
import { Logger } from './logger.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './external/in-memory-data.service';
import { APP_CONFIG, HERO_DI_CONFIG } from './app-config';

let silentLogger = {
  logs: ['Silent logger says "Shhh!". Provided via "useValue"'],
  log: () => {}
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    CoreModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroFormComponent,
    SizerComponent,
    HolaComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [
    HeroService,
    Logger,
    // UserService,
    // NewLogger,
    // { provide: Logger, useClass: EvenBetterLogger },
    // { provide: Logger, useClass: Logger },
    // { provide: Logger, useClass: BetterLogger },
    // { provide: Logger, useExisting: NewLogger },
    { provide: APP_CONFIG, useValue: HERO_DI_CONFIG },
    { provide: Logger, useValue: silentLogger }
  ]
})
export class AppModule { }





















