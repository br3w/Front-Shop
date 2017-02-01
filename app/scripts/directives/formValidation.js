    'use strict';
    function formValidation() {
        return {
            restrict:'A',
            scope: true,
            link: function(scope, element, attrs) {
                var $button = $(element).find('button');
                var $inputs = $(element).find('input');
                var $form = $(element).find('form');

                console.log('fsgffas');

                $button.click(function(){
                    $inputs.each(function(num, value){
                        if ($(value).val() == '' || $(value).val() == 'undefined'){
                            $(value).addClass('ng-erro');
                        }
                    });

                    $('.ng-erro').focus(function(){
                        $(this).removeClass('ng-erro');
                    });

                    var $num =  $(element).find('.ng-erro').length;

                    if($num == 0){
                        scope.$apply(attrs.formSubmit);
                    }
                });
            }
        }
    }
