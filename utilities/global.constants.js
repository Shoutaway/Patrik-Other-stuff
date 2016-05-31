"use strict";
var SELECTOR_USER_LOGIN = 'user-login';
var AppState;
(function (AppState) {
    AppState[AppState["NotAuthenticated"] = 0] = "NotAuthenticated";
    AppState[AppState["Authenticated"] = 1] = "Authenticated";
    AppState[AppState["Authenticating"] = 2] = "Authenticating";
    AppState[AppState["AuthenticationFailed"] = 3] = "AuthenticationFailed";
})(AppState || (AppState = {}));
exports.AppState = AppState;
var Global = (function () {
    function Global() {
    }
    return Global;
}());
//# sourceMappingURL=global.constants.js.map