myApp.service('originServer', ['$q', '$http', function($q, $http) {
    this.ajaxFn = function(url, method, data) {
        var defer = $q.defer();
        $http({
            url: url,
            method: method ? method : 'get'
        }).then(function(result) {
            defer.resolve(result);
        }, function(err) {
            defer.reject(err);
        });
        return defer.promise;
    };
}]);