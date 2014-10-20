'use strict';

/**
 * @ngdoc overview
 * @name angularjsorgTutorialApp
 * @description
 * # angularjsorgTutorialApp
 *
 * Main module of the application.
 */
var angularTutorialApp = angular
    .module('angularjsorgTutorialApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'phonecatControllers',
        'phonecatFilters',
        'phonecatServices'
    ]);

angularTutorialApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/phones', {
                templateUrl: 'partials/phone-list.html',
                controller: 'PhoneListCtrl'
            }).
            when('/phones/:phoneId', {
                templateUrl: 'partials/phone-detail.html',
                controller: 'PhoneDetailCtrl'
            }).
            otherwise({
                redirectTo: '/phones'
            });
    }]);
