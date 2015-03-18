/* describe, beforeEach, inject*/
describe("pieController", function () {
	var pieController;

	beforeEach(function () {
		angular.mock.module('app');

		angular.mock.inject(function($controller, $rootScope){
			$scope = $rootScope.$new();
			pieController = $controller('pieController', { 
				$scope: $scope 
			});
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
