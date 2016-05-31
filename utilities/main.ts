///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import { Global } from './global';

import { provide, bind } from 'angular2/core'
import { bootstrap } from 'angular2/platform/browser'
import { AppComponent } from './app.component'

/*
import { enableProdMode } from 'angular2/core';

// enable production mode and thus disable debugging information
enableProdMode();

bootstrap(HelloAngular2, [])
    .catch(err => console.error(err));
*/


import {
	Router,
	ROUTER_PROVIDERS,
	LocationStrategy,
	PathLocationStrategy
	}						from 'angular2/router';

import { CoreService } from './services/core.service';

/*
@RouteConfig([
	{path:'/appy', name: 'Start', component: AppComponent},
])
*/

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
	Location,
	provide(LocationStrategy, { useClass: PathLocationStrategy }),
	// bind(Router).toValue(new RootRouter(new Pipeline()))
	// Application Specific Services
	CoreService,
	
]);