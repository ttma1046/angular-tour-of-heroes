import { NgModule, Optional, SkipSelf } from '@angular/core';import { CommonModule } from '@angular/common';

import { NavComponent } from './nav/nav.component';
import { SpinnerComponent } from './spinner/spinner.component';

import { SpinnerService } from './spinner/spinner.service';
import { LoggerService } from './logger.service';

import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
  imports: [
    CommonModule // we use ngFor
  ],
  exports: [NavComponent, SpinnerComponent],
  declarations: [NavComponent, SpinnerComponent],
  providers: [LoggerService, SpinnerService]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}