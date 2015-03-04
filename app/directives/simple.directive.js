app.directive('aGreatEye', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<h1>CPU performance got {{ 2 + 2 }} times faster compared to the previous generation </h1>'
    };
});
