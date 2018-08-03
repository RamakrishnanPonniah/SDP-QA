(function() {
	'use strict';

	angular.module('app').controller('HomeController', HomeController);
	HomeController.$inject = ['$rootScope', '$scope', '$cookieStore', '$http', '$location', '$window'];

    function HomeController($rootScope, $scope, $cookieStore, $http, $location, $window) {

        $rootScope.Title = 'Dispute Alerts Portal';

        if (angular.isUndefined($rootScope.authenticated)) {
            window.location.href = "/";            
        }
        if ($rootScope.authenticated == false) {
            window.location.href = "/";
        }        
	}
})();