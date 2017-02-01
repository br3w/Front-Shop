'use strict';

    angular

    // Module indetification
    .module('App')

    // Factory service
    .factory('dataResultFactory', ['$rootScope', '$window',

        function ($rootScope, $window) {

            angular.element($window).on('storage', function(event) {
                if (event.key === 'dataResult') {
                    $rootScope.$apply();
                }
            });

            return {
                setData: function(data) {
                    $window.localStorage && $window.localStorage.setItem('dataResult', JSON.stringify(data));
                    return this;
                },
                getData: function() {
                    return $window.localStorage && $window.localStorage.getItem('dataResult');
                }
          };

    }]);
