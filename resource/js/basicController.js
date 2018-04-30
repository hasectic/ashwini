



var myApp = angular.module('myApp',[]);


myApp.controller('MainController', function($scope, $http,$rootScope,$timeout) {
    console.log('in js LRcontroller');
	$scope.data=val;
	console.log($scope.data);
    $scope.checked=function(count,baseCount,val)
    {
        console.log(count);
        console.log(baseCount);
        console.log(val);
        $scope.data[baseCount].category[count].answer=val;
        console.log($scope.data);
        localStorage.removeItem("selectedData")
        localStorage.setItem("selectedData",JSON.stringify($scope.data));
    }
    $scope.showResult=function()
    {
        $('#q-list').hide();
        $('#sbt-btn').hide();
        $('#result').show();
    }
	//$scope.loadChpData();
	//$scope.processChpData();
    })
myApp.controller('resultController', function($scope, $http,$rootScope,$timeout) {
    console.log('in js LRcontroller');
    //$scope.data=val;
    $scope.finaldata=JSON.parse(localStorage.getItem("selectedData"));
    console.log($scope.finaldata);
    //$scope.loadChpData();
    //$scope.processChpData();
    });
	
	
    
   