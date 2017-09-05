angular.module('services', ['ngResource'])
.factory('servicePlayers', function($resource){

	return $resource('https://api.opendota.com/api/players/:idPlayer', null);

})
.factory('cadastroDeFotos', function(recursoFoto, $q){
	var servico = {}

	servico.cadastrar = function(foto){
		return $q(function(resolve, reject){
			if(foto._id){
				recursoFoto.update({fotoId: foto._id}, foto, function(){
					resolve({
						mensagem: 'Foto' + foto.titulo + 'atualizada com sucesso!',
						inclusao: false
					});
				}, function(erro){
					console.log(erro);
					reject({
						mensagem: 'Não foi possivel alterar a foto ' + foto.titulo
					});
				});
			}else{
				recursoFoto.save(foto, function(){
					resolve({
						mensagem: 'Foto ' + foto.titulo + 'incluída com sucesso!',
						inclusao: true
					});
				}, function(erro){
					console.log(erro);
					reject({
						mensagem: 'Não foi possível incluir a foto ' + foto.titulo
					});
				})
			}
		})
	};

	return servico;
})