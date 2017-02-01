angular.module('App')

  .config(['$locationProvider', '$routeProvider', '$httpProvider',

    function($locationProvider, $routeProvider, $httpProvider) {

        $httpProvider.defaults.useXDomain = true;
        $httpProvider.interceptors.push('headerInperceptorFactory');


//----------------------------------------------------------------------
//                              HOME
//----------------------------------------------------------------------

        $routeProvider

            .when('/', {
                templateUrl: 'htmls/views/home/index.html',
                controller: 'homeCtrl',
                controllerAs: 'home'
            })

            .when('/404', {
                templateUrl: 'htmls/views/home/404.html',
                controller: 'homeCtrl',
                controllerAs: 'home'
            })

        .otherwise({redirectTo: '/404'});

        $locationProvider.html5Mode(false).hashPrefix('!');

}]);
