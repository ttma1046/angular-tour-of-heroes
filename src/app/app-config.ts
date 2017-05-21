// Solution 1
import { InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

/*
// FAIL! Can't use interface as provider token
providers: [{
	provide: AppConfig, useValue: HERO_DI_CONFIG
}]

// FAIL! Can't inject using the interface as the parameter type
constructor(private config: AppConfig){
	
}
*/

export interface AppConfig {
    apiEndpoint: string;
    title: string;
}

export const HERO_DI_CONFIG: AppConfig = {
    apiEndpoint: 'api.heroes.com',
    title: 'Dependency Injection'
};


