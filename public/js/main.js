angular.module('openDotaZuera', ['ngAnimate', 'ngRoute'])
.config(function($routeProvider, $locationProvider){

	$locationProvider.html5Mode(true);

	$routeProvider.when('/player', {
		templateUrl: '',
		controller: ''
	})

	$routeProvider.when('/fotos/new', {
		templateUrl: '',
		controller: ''
	})

	$routeProvider.when('/fotos/edit/:fotoId', {
		templateUrl: '',
		controller: ''
	})

	$routeProvider.otherwise({ redirectTo: '/player' })
});