describe('Unit testing great quotes', function() {
    var $compile,
        $rootScope;

    beforeEach(function() {
        // Load the app module, which contains the directive
        angular.mock.module('app');
    });

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(
        inject(function(_$compile_, _$rootScope_){
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
    }));

    it('Replaces the element with the appropriate content', function() {
        // Compile a piece of HTML containing the directive
        var element = $compile("<a-great-eye></a-great-eye>")($rootScope);
        // fire all the watches, so the scope expression {{2 + 2}} will be evaluated
        $rootScope.$digest();
        // Check that the compiled element contains the templated content
        expect(element.html()).toContain("CPU performance got 4 times faster compared to the previous generation");
    });
});
