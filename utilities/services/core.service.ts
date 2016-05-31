
/// <reference path="../../typings/main.d.ts" />

import { Global } from "../global";
import { AuthResultModel } from "../models/authresult.model"
import { Injectable, Output, EventEmitter } from 'angular2/core';

export class CoreService {
	@Output() onLogin: EventEmitter<any> = new EventEmitter();
	@Output() onSessionExpired: EventEmitter<any> = new EventEmitter();
	
	public currentAppState: Global.AppState;
	
	constructor() {
	}

	public triggerLoginEvent(authResult: AuthResultModel) {
		this.onLogin.next(authResult);
	} 
}