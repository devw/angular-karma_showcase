/* describe, beforeEach, inject*/
describe("pieController", function () {
	// var $controller;
	var $scope = {};

	beforeEach(function () {
		module('pie');

		inject(function($controller){
			// The injector unwraps the underscores (_) from around the parameter names when matching
			// $controller = _$controller_;
			$controller('pieController', { $scope: $scope });
		});
	});

	describe('Initialization', function() {
		it('should instantiate slice to 8', function() {
			expect($scope.slices).toEqual(8); 
		});
	});

	describe('$scope.slices', function () {
		it('sets the strength to "strong" if the password length is >8 chars', function() {
			$scope.eatSlice();
			expect($scope.slices).toEqual(7);
		});
	});

});
