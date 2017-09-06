angular.module('openDotaZuera', ['ngAnimate', 'ngRoute', 'services'])
.config(function($routeProvider, $locationProvider){

	$locationProvider.html5Mode(true);

	$routeProvider.when('/', {
		templateUrl: 'partials/principal.html',
		controller: 'PrincipalController'
	})

	$routeProvider.when('/players/:idPlayer', {
		templateUrl: 'partials/players.html',
		controller: 'PlayersController'
	})

	$routeProvider.otherwise({ redirectTo: '/' })
});