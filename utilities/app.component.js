System.register(['angular2/core', 'angular2/router', './services/account/account.service', './services/core.service', './components/start/start.component', './components/login/login.component', './components/user/profile.component'], function(exports_1, context_1) {
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
    var core_1, router_1, account_service_1, core_service_1, start_component_1, login_component_1, profile_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (account_service_1_1) {
                account_service_1 = account_service_1_1;
            },
            function (core_service_1_1) {
                core_service_1 = core_service_1_1;
            },
            function (start_component_1_1) {
                start_component_1 = start_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(location, loginComponent, coreService, accountService) {
                    this.loginComponent = loginComponent;
                    //location.go('/profile');
                    console.log('app component constructor');
                    loginComponent.sayHello();
                    this.coreService = coreService;
                    this.accountService = accountService;
                    this.coreService.onLogin.subscribe(function (event) {
                        //console.log('On dddLogin Event');			
                    });
                    this.coreService.triggerLoginEvent(null);
                }
                AppComponent.prototype.onLoginSubmit = function (event) {
                    console.log('Login Submit', event);
                    this.accountService.authenticateUser("", "");
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'bb-app',
                        templateUrl: './app/app.component.html',
                        directives: [login_component_1.LoginComponent, router_1.ROUTER_DIRECTIVES],
                        pipes: [],
                        providers: [account_service_1.AccountService, login_component_1.LoginComponent]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Start', component: start_component_1.StartComponent, useAsDefault: true },
                        { path: '/login', name: 'Login', component: login_component_1.LoginComponent },
                        { path: '/profile', name: 'Profile', component: profile_component_1.ProfileComponent },
                        { path: '/**', redirectTo: ['Start'] }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Location, login_component_1.LoginComponent, core_service_1.CoreService, account_service_1.AccountService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map