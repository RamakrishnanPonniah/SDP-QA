(function () {
    'use strict';

    angular.module('app').controller('LoginController', LoginController);
    LoginController.$inject = ['$rootScope', '$scope', '$cookieStore', '$http', '$location'];

    function LoginController($rootScope, $scope, $cookieStore, $http, $location) {
        var loginCtrl = $scope;
        $rootScope.Title = 'Login';
        $rootScope.authenticated = false;

        $scope.User = {}
        loginCtrl.loginCase = loginCase;
        init();
        
        function init() {
            var lang = $rootScope.langselect;
            if (lang != null && lang != undefined) {
                $("#langSelect").val(lang);
                //languageChange(lang);
            }
        }

        function loginCase() {
            if ($scope.username.toLowerCase() == "user" && $scope.password == "sdp") {
                $rootScope.loginData = { username: $scope.username }
                $rootScope.authenticated = true;
                $location.path('home');
            }
            else {
                $('#loginAlert').fadeIn('fast');
            }
        }

        $(document).ready(function () {
            var lang;            
            $('.selectpicker').selectpicker('refresh');          
        });        
    }
})();