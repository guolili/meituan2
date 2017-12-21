myApp.service('homeServer', ['originServer', function(originServer) {
    this.ajaxFn = function() {
        return originServer.ajaxFn('http://localhost:8020/home');
    };
}]);