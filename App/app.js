var myApp = angular.module('app', ['ui.router']);
myApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'App/View/home.html',
            controller: 'homeController'
        })
        .state('main', {
            url: '/main',
            templateUrl: 'App/View/main.html'
        });
});