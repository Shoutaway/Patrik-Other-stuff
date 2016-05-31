System.register(['angular2/core', '../../services/account/account.service', './login.model'], function(exports_1, context_1) {
    /// <reference path="../../../typings/main.d.ts" />
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, account_service_1, login_model_1;
    var SELECTOR_USER_LOGIN, LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (account_service_1_1) {
                account_service_1 = account_service_1_1;
            },
            function (login_model_1_1) {
                login_model_1 = login_model_1_1;
            }],
        execute: function() {
            SELECTOR_USER_LOGIN = 'user-login';
            LoginComponent = (function () {
                function LoginComponent(accountService) {
                    this.setState = function (newState) {
                        console.log("new state");
                    };
                    this.loginEvent = new core_1.EventEmitter();
                    this.loginModel = new login_model_1.LoginModel();
                    this.submitted = false;
                    this.accountService = accountService;
                }
                LoginComponent.prototype.sayHello = function () {
                    console.log('Hello from LoginComponent');
                };
                LoginComponent.prototype.onSubmit = function (model) {
                    //	if (this.submitted) return;
                    console.log(model);
                    var authResult = this.accountService.authenticateUser(model.email, model.password);
                    this.loginEvent.emit(authResult);
                    this.submitted = true;
                };
                LoginComponent.prototype.reset = function () {
                    this.submitted = false;
                };
                LoginComponent.prototype.validateLogin = function (model) {
                };
                Object.defineProperty(LoginComponent.prototype, "diagnostic", {
                    // TODO: Remove this when we're done
                    get: function () { return JSON.stringify(this.loginModel); },
                    enumerable: true,
                    configurable: true
                });
                ;
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], LoginComponent.prototype, "setState", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], LoginComponent.prototype, "loginEvent", void 0);
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: SELECTOR_USER_LOGIN,
                        templateUrl: './app/components/login/login.component.html',
                        providers: [account_service_1.AccountService],
                    }), 
                    __metadata('design:paramtypes', [account_service_1.AccountService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map