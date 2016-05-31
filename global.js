System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SELECTOR_USER_LOGIN, Constants, Global;
    return {
        setters:[],
        execute: function() {
            SELECTOR_USER_LOGIN = 'user-login';
            /*
            module App {
            }
            
            
                
            enum AppState {
                NotAuthenticated,
                Authenticated,
                Authenticating,
                AuthenticationFailed
            }
            */
            (function (Constants) {
                var allan = "";
            })(Constants || (Constants = {}));
            (function (Global) {
                (function (AppState) {
                    AppState[AppState["Idle"] = 0] = "Idle";
                    AppState[AppState["Loading"] = 1] = "Loading";
                    AppState[AppState["Ready"] = 2] = "Ready";
                    AppState[AppState["Error"] = 3] = "Error";
                })(Global.AppState || (Global.AppState = {}));
                var AppState = Global.AppState;
            })(Global || (Global = {}));
            exports_1("Global", Global);
            exports_1("Constants", Constants);
        }
    }
});
//# sourceMappingURL=global.js.map