import {Component} from 'angular2/core';

@Component({
    selector: 'user-registration',
    templateUrl: './app/components/register/registration.component.html'
})

/*
@RouteConfig([
  {path:'/register', name: 'Register', component: UserRegistrationComponent},
  {path:'/profile', name: 'Profile', component: UserProfileComponent}
])
*/

export class UserRegistrationComponent {
    constructor() {
    }
}