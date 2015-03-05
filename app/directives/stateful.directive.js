/*global app*/
app.directive('nsStateful', function () {
    'use strict';
    return {
        restrict: 'A', // only matches attribute name
        scope: false,
        // Creating a Directive that Manipulates the DOM
        link: function link(scope, element, attrs) {
            if (!attrs.nsStateful) {
                throw 'You must provide a class name in order to use the nsStateful directive.';
            }

            element.bind('click', function () {
                scope.$apply(function () {
                    if (!element.hasClass(attrs.nsStateful)) {
                        element.addClass(attrs.nsStateful);
                    } else {
                        element.removeClass(attrs.nsStateful);
                    }
                });
            });
        }
    };
});
