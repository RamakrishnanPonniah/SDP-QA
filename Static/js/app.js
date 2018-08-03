(function () {

    angular.module('app', ['ngRoute', 'ngCookies', 'angularjs-gauge']).config(config).run(run).service('LoadingInterceptor', loadingInterceptor);

    config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider'];

    function config($routeProvider, $locationProvider, $httpProvider) {
        
        $httpProvider.interceptors.push('LoadingInterceptor');
        $locationProvider.hashPrefix('');

        $routeProvider.when('/', {
            controller: 'LoginController',
            templateUrl: '../../templates/login.html',
            controllerAs: 'loginCtrl'
        }).when('/login', {
            controller: 'LoginController',
            templateUrl: '../../templates/login.html',
            controllerAs: 'loginCtrl'
        }).when('/home', {
            controller: 'HomeController',
            templateUrl: '../../templates/home.html',
            controllerAs: 'homeCtrl'
        }).when('/transaction', {
            controller: 'TransactionController',
            templateUrl: '../../templates/transaction.html',
            controllerAs: 'transCtrl'
        }).when('/final', {
            controller: 'FinalController',
            templateUrl: '../../templates/final.html',
            controllerAs: 'finalCtrl'
        }).when('/error', {
            templateUrl: '../templates/errorPage.html'
        }).otherwise({
            redirectTo: '/'
        });

        // use the HTML5 History API
        //$locationProvider.html5Mode(true);
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });
        $locationProvider.html5Mode(false);
    }

    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];

    function run($rootScope, $location, $cookieStore, $http) {
        $rootScope.Title = 'Login';
    }

    loadingInterceptor.$inject = ['$q', '$rootScope', '$log'];


    function loadingInterceptor($q, $rootScope, $log) {
        'use strict';

        var xhrCreations = 0;
        var xhrResolutions = 0;

        function isLoading() {
            return xhrResolutions < xhrCreations;
        }

        function updateStatus() {
            $rootScope.loading = isLoading();
        }

        return {
            request: function (config) {
                xhrCreations++;
                updateStatus();
                return config;
            },
            requestError: function (rejection) {
                xhrResolutions++;
                updateStatus();
                $log.error('Request error:', rejection);
                return $q.reject(rejection);
            },
            response: function (response) {
                xhrResolutions++;
                updateStatus();
                return response;
            },
            responseError: function (rejection) {
                xhrResolutions++;
                updateStatus();
                $log.error('Response error:', rejection);
                return $q.reject(rejection);
            }
        };
    }

})();