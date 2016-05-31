import { Component, Output, EventEmitter } from 'angular2/core';
import { Location, Router, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { AccountService } from './services/account/account.service';
import { CoreService } from './services/core.service';

import { StartComponent } from './components/start/start.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/user/profile.component';


@Component({
    selector: 'bb-app',
	templateUrl: './app/app.component.html',
    directives: [LoginComponent, ROUTER_DIRECTIVES],
	pipes: [],
	providers:[AccountService, LoginComponent]
})

@RouteConfig([
	{ path:'/', name: 'Start', component: StartComponent, useAsDefault: true },
	{ path:'/login', name: 'Login', component: LoginComponent},
	{ path:'/profile', name: 'Profile', component: ProfileComponent },
	{ path: '/**', redirectTo: ['Start'] }
])

export class AppComponent {
	accountService: AccountService;
	coreService: CoreService;
	router: Router;
	
    constructor(
		location: Location,
		public loginComponent: LoginComponent,
		coreService: CoreService,
		accountService: AccountService 
	) {
		//location.go('/profile');
		console.log('app component constructor');
		loginComponent.sayHello();
		this.coreService = coreService;
		this.accountService = accountService;
		
		this.coreService.onLogin.subscribe(function(event: any) {
			//console.log('On dddLogin Event');			
		});	
		
		this.coreService.triggerLoginEvent(null);
    }
	
	onLoginSubmit(event: any) {
		console.log('Login Submit', event);
		this.accountService.authenticateUser("", "")
	}
}