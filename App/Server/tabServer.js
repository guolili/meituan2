myApp.service('tabServer', ['originServer', function (originServer) {
	this.ajaxFn = function (arg) {
		return originServer.ajaxFn('http://localhost:8020/tab/' + arg);
	}
}])