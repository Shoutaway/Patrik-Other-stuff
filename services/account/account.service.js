System.register(['../../models/authresult.model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var authresult_model_1;
    var AccountService;
    return {
        setters:[
            function (authresult_model_1_1) {
                authresult_model_1 = authresult_model_1_1;
            }],
        execute: function() {
            // Implementation ---------------------------------------------
            AccountService = (function () {
                function AccountService() {
                }
                AccountService.prototype.authenticateUser = function (email, password) {
                    var authResult = new authresult_model_1.AuthResultModel(true);
                    return authResult;
                };
                AccountService.prototype.setAuthenticated = function (isAuthenticated) {
                };
                return AccountService;
            }());
            exports_1("AccountService", AccountService);
        }
    }
});
//# sourceMappingURL=account.service.js.map