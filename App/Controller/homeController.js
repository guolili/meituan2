var homeController = function($scope, homeServer) {
    return homeServer.ajaxFn()
        .then(function(result) {
            $scope.result = result.data;
            $scope.ngRepeatFinished = function (ngRepeatFinishedEvent) {
            	console.log(ngRepeatFinishedEvent);
            }
        }, function(err) {
            console.log(err);
        })

}
homeController.$inject = ['$scope', 'homeServer'];
myApp.controller('homeController', homeController);