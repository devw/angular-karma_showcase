/*global angular*/
app.controller('pieController', ['$scope', function pieController ($scope) {
    'use strict';

    $scope.slices = 8;

    $scope.eatSlice = function () {
        if ($scope.slices) {
            $scope.slices = $scope.slices - 1;
        }
    };
}]);
