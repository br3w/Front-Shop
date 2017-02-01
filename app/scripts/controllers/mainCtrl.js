'use strict';

    angular
    // Module indetification

    .module('App')
    // Controller name

    .controller('mainCtrl', [ '$scope','$rootScope',
        function($scope, $rootScope) {
            $scope.verifyMail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            $scope.verifyPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;
            $scope.pageClass = 'slide-left';
        }
    ]);

    var validationForms = function($arr){
        var $num = 0;
        $.each($arr,function(i, elem){
            if($(elem).hasClass('ng-empty') || $(elem).hasClass('ng-invalid-mask')){
                $(elem).addClass('ng-error');
                $num++;
            }
        })
        return $num;
    }
