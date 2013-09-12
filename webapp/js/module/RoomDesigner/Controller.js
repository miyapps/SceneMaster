function RoomDesignerController($scope, $http){
	$http.get('/shape/list').success(function(data) {
	    $scope.shapes = data;
	});
	
}