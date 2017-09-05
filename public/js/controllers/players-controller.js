angular.module('openDotaZuera').controller('PlayersController', function($scope, servicePlayers, $routeParams){

	$scope.players = [];
	$scope.mensagem = '';

	servicePlayers.get({idPlayer: $routeParams.idPlayer}, function(players){
		$scope.players = players;
	}, function(erro){	
		console.log(erro)
		$scope.mensagem = "Seguinte Erro " + erro;
	});
	
});