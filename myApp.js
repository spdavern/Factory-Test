angular.module('myApp', [])
	.factory('counter', function() {
		return function() {
			var count = 0;
			return function() {
				return count++;
			};
		};
    })
	.controller('myController', ['counter', '$scope', function(counter, $scope) {
		var c = counter();
		var d = counter();
		console.log(c===d);
		$scope.a = c();
		$scope.b = d();
		$scope.incrementa = function() {
			$scope.a = c();
		};
		$scope.incrementb = function() {
			$scope.b = d();
		};
	}])
	.controller('mySecondController', ['counter', '$scope', function(counter, $scope) {
		var d = counter();
		$scope.b = d();
		$scope.incrementb = function() {
			$scope.b = d();
		};
	}])