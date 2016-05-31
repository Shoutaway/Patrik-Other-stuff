import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';

import { ProfileComponent } from '../user/profile.component';

@Component({
    selector: 'router-outlet',
    templateUrl: './app/components/start/start.component.html'
})

/*
@RouteConfig([
  { path: '/profile/:userprofile/', component: ProfileComponent, name: 'Members' },

])
*/

export class StartComponent {
    constructor() {
		console.log('Start Component constructor');
    }
}