angular.module('openDotaZuera').controller('PrincipalController', function($scope, $routeParams){

	$scope.login = function() {
		window.location = "/authenticate";
	}

	$scope.logout = function() {
		window.location = "/logout";
	}
	
});