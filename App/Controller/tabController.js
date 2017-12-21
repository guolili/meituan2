myApp.controller('tabController', ['$scope','tabServer', '$stateParams', function($scope,tabServer,$stateParams) {
	tabServer.ajaxFn($stateParams.id)
		.then(function (result) {
			$scope.resul = result;
			console.log($scope.resul);
		}, function (err) {
			console.log(err);
		})
}])