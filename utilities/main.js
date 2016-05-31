System.register(['angular2/core', 'angular2/platform/browser', './app.component', 'angular2/router', './services/core.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, browser_1, app_component_1, router_1, core_service_1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_service_1_1) {
                core_service_1 = core_service_1_1;
            }],
        execute: function() {
            /*
            @RouteConfig([
                {path:'/appy', name: 'Start', component: AppComponent},
            ])
            */
            browser_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                Location,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.PathLocationStrategy }),
                // bind(Router).toValue(new RootRouter(new Pipeline()))
                // Application Specific Services
                core_service_1.CoreService,
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map