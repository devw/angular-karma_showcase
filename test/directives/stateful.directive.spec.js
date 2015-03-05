/*global describe, beforeEach, it, $, module, app, angular, expect*/
describe('nsStateful', function() {
    'use strict';

    var $rootScope,
        $scope,
        $compile,
        el,
        $body = $('body'),
        simpleHtml = '<button ns-stateful="red"></button>';

    beforeEach(angular.mock.module('app'));

    beforeEach(function() {
        angular.mock.inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
            el = $compile(simpleHtml)($rootScope);
        });

        $body.append(el);
        $rootScope.$digest();
    });

    it('Should should be able to toggle the class based on clicks.', function() {
        expect(el.hasClass('red')).toBeFalsy();
        el.click();
        $rootScope.$digest();
        expect(el.hasClass('red')).toBeTruthy();
    });
});