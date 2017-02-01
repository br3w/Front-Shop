'use strict';

    angular

    // Module indetification
    .module('App')

    // Factory service
    .factory('userService', ['$rootScope', '$window',

        function ($rootScope, $window) {

            angular.element($window).on('storage', function(event) {
                if (event.key === 'dataJson') {
                    $rootScope.$apply();
                }
            });

            return {
                setData: function(data) {
                    $window.localStorage && $window.localStorage.setItem('dataJson', data);
                    return this;
                },
                getData: function() {
                    return $window.localStorage && $window.localStorage.getItem('dataJson');
                }
          };

    }]);
