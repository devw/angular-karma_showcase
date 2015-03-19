[![Build Status](https://travis-ci.org/devw/angular_test.svg)](https://travis-ci.org/devw/angular_test)

## Angualar Karma showcase

### Create the following directory structure

    > mkdir -p angular-karma-showcase/{app,test}
    > cd angular-karma-showcase
    
### Install third-party dependencies

    > bower init
    > bower install angular --save-dev
    > bower install angular-mocks --save-dev
    > bower install angular-resource --save-dev
    > bower install jasmine --save-dev
    > touche .gitignore # Git should ignore bower_components/*
    
### Run Jasmine on the browser

1. Create your test html file to see the results

        <-- spec-runner.html -->
        <link rel="stylesheet" href="./bower_components/jasmine/lib/jasmine-core/jasmine.css">
        <script src="./bower_components/jasmine/lib/jasmine-core/jasmine.js"></script>
        <script src="./bower_components/jasmine/lib/jasmine-core/jasmine-html.js"></script>
        <script src="./bower_components/jasmine/lib/jasmine-core/boot.js"></script>
    
2. Create your first html file to see the results

        /*test/simple.spec.js*/
        /*global describe, beforeEach, it*/
        describe('Simple test', function() {
            it('should be true...', function() {
                expect(true).toBeTruthy();
            });
        });
        

### Example code of an angular controller 
    
    // app/controllers/password.controller.js 
    // Inline Array Annotation
    app.controller('passwordController', ['$scope', function PasswordController($scope) {
        'use strict';
    
        $scope.password = '';
        $scope.strength = 'weak';
    
        $scope.grade = function() {
    
            var size = $scope.password.length;
    
            if (size > 8) {
                $scope.strength = 'strong';
            } else if (size > 3) {
                $scope.strength = 'medium';
            } else {
                $scope.strength = 'weak';
            }
        };
    
    }]);

### Testing angular controller

    /*global describe, beforeEach, it*/
    describe('MyControllerToTest', function () {
        var myController;
        var $scope;
    
        beforeEach(function () {
            angular.mock.module('myApp');
    
            angular.mock.inject(function($controller, $rootScope){
                $scope = $rootScope.$new();
                myController = $controller('myController', { 
                    $scope: $scope 
                });;
            });
        });
    
        describe('$scope.myMethod', function () {
            it('Describe what your method should do', function() {
                // test code
            });
        });
    });
    
### Example code of Angular Directive

    /*app/directives/stateful.directive.js*/
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

### Testing angular directive

    describe('My directive test', function() {
        'use strict';
    
        var el,
            simpleHtml = 'my html code';
    
        beforeEach(function () {
            angular.mock.module('myApp');
    
            angular.mock.inject(function ($compile, $rootScope) {
                // $compile is used to link scope
                el = $compile(simpleHtml)($rootScope);
            });
        });
    
        it('Describe what your method should do.', function() {
            // test code
        });
    });

### Example code of Angular Filter

    app.filter('titleCase', function () {
        'use strict';
        return function (val) {
            return val ? val.replace(/\w\S*/g, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }) : val;
        };
    });

### Testing Angular Filter

    /*global describe*/
    describe('myFilter test', function () {
        'use strict';
    
        var myFilter;
    
        beforeEach(function () {
    
            module('myApp');
    
            angular.mock.inject(function ($filter) {
                myFilter = $filter('myFilter');
            });
        });
    
        it('Fiter description', function() {
            // some code
        });
    });
    
### Create the package.json file

    > npm init
    
### Suggestions 
  
  1. To install tree command

        # OSx Users
        > brew install tree
        > sudo port install tree
        > fink install tree
        
        # Windows OS
        > export PATH=/c/Windows/System32/:$PATH
