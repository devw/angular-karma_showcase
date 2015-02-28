/*global describe*/
describe('PasswordController', function () {
    var $controller;
    var $scope = {};

    beforeEach(function () {
        module('app');

        inject(function(_$controller_){
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $controller = _$controller_;
        });
    });

    describe('$scope.grade', function () {
        it('sets the strength to "strong" if the password length is >8 chars', function() {
            $controller('PasswordController', { $scope: $scope });
            $scope.password = 'asdasdasds';
            $scope.grade();
            expect($scope.strength).toEqual('strong');
        });
    });
});
