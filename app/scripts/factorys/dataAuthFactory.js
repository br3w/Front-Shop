'use strict';

    angular

    // Module indetification
    .module('App')

    // Factory service
    .factory('dataAuthFactory', ['$rootScope', '$window',

        function ($rootScope, $window) {

            angular.element($window).on('storage', function(event) {
                if (event.key === 'dataAuth') {
                    $rootScope.$apply();
                }
            });

            return {
                setData: function(data) {
                    $window.localStorage && $window.localStorage.setItem('dataAuth', JSON.stringify(data));
                    return this;
                },
                getData: function() {
                    return $window.localStorage && $window.localStorage.getItem('dataAuth');
                }
          };

    }]);
