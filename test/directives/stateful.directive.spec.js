/*global describe, beforeEach, it, $, module, app, angular, expect*/
describe('nsStateful', function() {
    'use strict';

    var el,
        simpleHtml = '<button ns-stateful="red"></button>';

    beforeEach(angular.mock.module('app'));

    beforeEach(function() {
        angular.mock.inject(function ($compile, $rootScope) {
            el = $compile(simpleHtml)($rootScope);
        });
    });

    it('Should should be able to toggle the class based on clicks.', function() {
        expect(el.hasClass('red')).toBeFalsy();
        el.triggerHandler('click');
        expect(el.hasClass('red')).toBeTruthy();
    });
});