import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'user-profile',
    templateUrl: './app/components/user/profile.component.html'
})

export class ProfileComponent {
	memberName: string;
	
    constructor(params: RouteParams) {
		console.log('Profile component');
		this.memberName = params.get('name');
    }
}