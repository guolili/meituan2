myApp.directive('onFinish', function ($timeout) {
	return {
		link: function (scope, ele, attrs) {
			if (scope.$last === true) {
				scope.$emit('ngRepeatFinished');// 发送
			}
		}
	}
})