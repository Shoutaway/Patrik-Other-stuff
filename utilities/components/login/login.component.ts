/// <reference path="../../../typings/main.d.ts" />
"use strict";

import { Global } from "../../global";
import { Component, Input, Output, EventEmitter} from 'angular2/core';
import { NgForm } from 'angular2/common';
import { AccountService } from '../../services/account/account.service';
import { LoginModel } from './login.model';

var SELECTOR_USER_LOGIN = 'user-login';

@Component({
    selector: SELECTOR_USER_LOGIN,
    templateUrl: './app/components/login/login.component.html',
	providers:[AccountService],
})

export class LoginComponent {
	@Input() setState = function(newState: Global.AppState) {
		console.log("new state");	
	}
	
	@Output() loginEvent = new EventEmitter<any>();	
	accountService: AccountService;
	
	loginModel = new LoginModel();
	submitted = false;

	public sayHello() {
		console.log('Hello from LoginComponent');
	}
	
	onSubmit(model: any) {
	//	if (this.submitted) return;
		
		console.log(model);
		var authResult = this.accountService.authenticateUser(model.email, model.password);
		this.loginEvent.emit(authResult);
		
		this.submitted = true;
	}

    constructor(accountService: AccountService) {
		this.accountService = accountService;
    }
	
	public reset() {
		this.submitted = false;
	}
	
	public validateLogin(model: any) {
		
	}

	// TODO: Remove this when we're done
	get diagnostic() { return JSON.stringify(this.loginModel) }; 
}