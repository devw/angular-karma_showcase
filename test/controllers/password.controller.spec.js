/*global describe*/
describe('PasswordController', function () {
    var $passwordController;
    var $scope;

    beforeEach(function () {
        angular.mock.module('app');

        angular.mock.inject(function($controller, $rootScope){
            $scope = $rootScope.$new();
            passwordController = $controller('PasswordController', { 
                $scope: $scope 
            });;
        });
    });

    describe('$scope.grade', function () {
        it('sets the strength to "strong" if the password length is >8 chars', function() {
            $scope.password = 'asdasdasds';
            $scope.grade();
            expect($scope.strength).toEqual('strong');
        });
    });
});
