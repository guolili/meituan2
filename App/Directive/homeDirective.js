myApp.directive('homeDir', function() {
    return {
        templateUrl: 'App/View/homeDir.html',
        controller: function ($scope) {
        	$scope.tit = ["全部","附近商家","智能排序","筛选"]
        	$scope.tab = [
				{
					"id": 1,
					"arr": ["火锅","自助餐","甜点"]
				},
				{
					"id": 2,
					"arr": ["朝阳","海淀","大兴区"]
				},
				{
					"id": 3,
					"arr": ["智能排序","离我最近","人气最高"]
				},
				{
					"id": 4,
					"arr": ["只看免预约","节假日可用","餐厅服务"]
				}
			];
        },
        controllerAs: 'tabController',
        link: function (scope, ele, attr, tabController) {
        	var ulis = ele[0].querySelector('.tab').getElementsByTagName('ul')[0];
        	var lis = ulis.querySelectorAll('strong');
        	console.log(ulis);
        }
    }
})