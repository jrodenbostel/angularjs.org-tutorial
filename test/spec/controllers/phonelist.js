'use strict';

describe('Controller: PhonelistCtrl', function () {

    var phoneListCtrl, scope, $httpBackend;

    // load the controller's module
    beforeEach(module('angularjsorgTutorialApp'));

    // Initialize the controller and a mock scope
    beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
        $httpBackend = _$httpBackend_;

        //setting up mock call
        $httpBackend.expectGET('phones/phones.json').
            respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

        scope = $rootScope.$new();
        phoneListCtrl = $controller('PhoneListCtrl', {
            $scope: scope
        });
    }));

    it('should create "phones" model with 2 phones fetched from xhr', function () {
        expect(scope.phones).toBeUndefined();
        $httpBackend.flush();

        expect(scope.phones).toEqual([{name: 'Nexus S'},
            {name: 'Motorola DROID'}]);

        expect(scope.phones.length).toBe(2);
    });

    it('should set the default value of orderProp model', function () {
        expect(scope.orderProp).toBe('age');
    });
});

describe('Controller: Phone Detail', function() {

    var scope, $httpBackend, ctrl,
        xyzPhoneData = function() {
            return {
                name: 'phone xyz',
                images: ['image/url1.png', 'image/url2.png']
            }
        };

    beforeEach(module('angularjsorgTutorialApp'));

    describe('PhoneDetailCtrl', function(){
        var scope, $httpBackend, ctrl;

        beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('phones/xyz.json').respond({
                    name:'phone xyz',
                    images: ['image/url1.png', 'image/url2.png']
                });

            $routeParams.phoneId = 'xyz';
            scope = $rootScope.$new();
            ctrl = $controller('PhoneDetailCtrl', {$scope: scope});
        }));


        it('should fetch phone detail', function() {
            expect(scope.phone).toBeUndefined();
            $httpBackend.flush();

            expect(scope.phone).toEqual(xyzPhoneData());
        });
    });
});
