/*global describe*/
describe('titleCase filter', function () {
    'use strict';

    var $filter, filter;

    beforeEach(function () {
        module('app');
        inject(function ($injector) {
            $filter = $injector.get('$filter');
            filter = $filter('titleCase');
        });
    });

    it('Should return undefine ', function() {
        expect(filter(undefined)).toBeUndefined();
    });

    it('Should change the casing of lower case words...', function() {
        expect(filter('antonio pierro')).toEqual('Antonio Pierro');
    });

    it('Should change the case of random...', function() {
        expect(filter('aNtOniO pIERRo')).toEqual('Antonio Pierro');
    });

    it('Should works fine with a normal phrase', function () {
        expect(filter('Hello World')).toEqual('Hello World');
    });
});
