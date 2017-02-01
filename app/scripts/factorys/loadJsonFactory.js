'use strict';

    angular

    // Module indetification
    .module('App')

    // Factory service
    .factory('loadJsonFactory', ['$http', '$timeout', '$q','$window',

        function($http, $timeout, $q, $window) {

            var results = {};

            function loadJson(modulo){
                if(modulo == 'dash'){
                    var host = $window.location.host;
                    var url = './#!/user/dash';
                    $window.location.href = url;
                    return;
                }
                var d = $q.defer();
                $http.get('data/'+modulo+'.json')
                    .success(function (data) {
                        d.resolve(data);
                    })
                    .error(function (error) {
                        var host = $window.location.host;
                        var url = './#!/404';
                        $window.location.href = url;
                    });
                return d.promise;
            }

            results.data = loadJson;
            return results;

    }]);
