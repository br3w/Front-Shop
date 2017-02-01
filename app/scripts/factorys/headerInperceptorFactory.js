'use strict';

    angular

    // Module indetification
    .module('App')

    // Factory service
    .factory('headerInperceptorFactory', function(){
        return {
            request: function (config) {
                if(localStorage.getItem('dataAuth')){
                    config.headers['Authorization'] = localStorage.getItem('dataAuth');
                    config.headers['Accept'] = 'application/json;odata=verbose';
                    config.headers['Content-Type'] = 'application/json;charset=utf-8';
                } else {
                    config.headers['Accept'] = 'application/json;odata=verbose';
                    config.headers['Content-Type'] = 'application/json;charset=utf-8';
                }
                return config;
            }
        };
    });
