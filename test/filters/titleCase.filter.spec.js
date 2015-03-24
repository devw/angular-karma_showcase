/*global describe*/
describe('titleCase filter', function () {
    'use strict';

    var filter;

    beforeEach(function () {
        module('app');
        angular.mock.inject(function ($filter) {
            filter = $filter('titleCase');
        });
    });

    it('Should set the first character to uppercase ', function() {
        expect(filter(undefined)).toBeUndefined();
        expect(filter('antonio pierro')).toEqual('Antonio Pierro');
        expect(filter('aNtOniO pIERRo')).toEqual('Antonio Pierro');
        expect(filter('Hello World')).toEqual('Hello World');
    });
});
