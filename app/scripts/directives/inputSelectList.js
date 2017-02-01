    'use strict';
    function inputSelectList() {
        return {
            restrict:'A',
            link: function(scope, element, attrs) {

                setTimeout(function(){
                    // Css height
                    var $row = 45;

                    var $allow = $(element).find('.option');

                    var allowSend = function (){
                        $('#sendForm').attr('disabled', false);
                        $('#sendForm').attr('class', 'sign');
                    }

                    var $index  = [
                        $('.column-1').find('.option').length,
                        $('.column-2').find('.option').length,
                        $('.column-3').find('.option').length,
                        $('.column-4').find('.option').length
                    ];


                    var $arrayValue = [];

                    var getIndex = function($row, $adjust){
                    var $id =  ((($adjust - ($row * 2)) / $row) * -1);
                        return $id;
                    };

                    var getGetValue = function($index){
                        return $index;
                    };

                    var setColorAtual = function($column, $elem){
                        $column.find('.option').each(function(){
                            if($(this).index() == $elem ){
                                $(this).find('span').css({'color':'#FFF'});
                            } else {
                                $(this).find('span').css({'color':'#d4ddeb'});
                            }
                        })
                    };

                    var one = $('.column-1').pep({
                        axis: 'y',
                        // debug: true,
                        cssEaseDuration: '200',
                        useCSSTranslation: true,
                        constrainTo: [(($row * $index[0]) - $row * 3 ) * -1, 0, $row * 2, 0],
                        startPos: {'left': 0, 'top':$row * 2},
                        moveTo:function(x, y) {
                            one.css({
                            left: x,
                            top: y
                            });
                        },
                        rest: function(ev, obj) {
                            var $adjust  = Math.round( one.position().top / $row ) * $row;
                            this.moveTo(0, $adjust+'px');
                            var $index = getIndex($row, $adjust);
                            var $value = parseInt(getGetValue($index));
                            $arrayValue[0] = $value;
                            setColorAtual($('.column-1'), $arrayValue[0]);
                            $('input#list').val($arrayValue);
                            allowSend();
                            console.log($arrayValue);

                        }
                    });
                    var two = $('.column-2').pep({
                        axis: 'y',
                        // debug: true,
                        cssEaseDuration: '200',
                        useCSSTranslation: true,
                        constrainTo: [(($row * $index[1]) - $row * 3 ) * -1, 0, $row * 2, 0],
                        startPos: {'left': 0, 'top':$row * 2},
                        moveTo:function(x, y) {
                            two.css({
                            left: x,
                            top: y
                            });
                        },
                        rest: function(ev, obj) {
                            var $adjust  = Math.round( two.position().top / $row ) * $row;
                            this.moveTo(0, $adjust+'px');
                            var $index = getIndex($row, $adjust);
                            var $value = parseInt(getGetValue($index));
                            $arrayValue[1] = $value;
                            setColorAtual($('.column-2'), $arrayValue[1]);
                            $('input#list').val($arrayValue);
                            console.log($arrayValue);
                        }
                    });
                    var three = $('.column-3').pep({
                        axis: 'y',
                        // debug: true,
                        cssEaseDuration: '200',
                        useCSSTranslation: true,
                        constrainTo: [(($row * $index[2]) - $row * 3 ) * -1, 0, $row * 2, 0],
                        startPos: {'left': 0, 'top':$row * 2},
                        moveTo:function(x, y) {
                            three.css({
                            left: x,
                            top: y
                            });
                        },
                        rest: function(ev, obj) {
                            var $adjust  = Math.round( three.position().top / $row ) * $row;
                            this.moveTo(0, $adjust+'px');
                            var $index = getIndex($row, $adjust);
                            var $value = parseInt(getGetValue($index));
                            $arrayValue[2] = $value;
                            setColorAtual($('.column-3'), $arrayValue[2]);
                            $('input#list').val($arrayValue);
                            console.log($arrayValue);
                        }
                    });
                    var four = $('.column-4').pep({
                        axis: 'y',
                        // debug: true,
                        cssEaseDuration: '200',
                        useCSSTranslation: true,
                        constrainTo: [(($row * $index[3]) - $row * 3 ) * -1, 0, $row * 2, 0],
                        startPos: {'left': 0, 'top':$row * 2},
                        moveTo:function(x, y) {
                            four.css({
                            left: x,
                            top: y
                            });
                        },
                        rest: function(ev, obj) {
                            var $adjust  = Math.round( four.position().top / $row ) * $row;
                            this.moveTo(0, $adjust+'px');
                            var $index = getIndex($row, $adjust);
                            var $value = parseInt(getGetValue($index));
                            $arrayValue[3] = $value;
                            setColorAtual($('.column-4'), $arrayValue[3]);
                            $('input#list').val($arrayValue);
                            console.log($arrayValue);
                        }
                    });

                    $('ul li:first-child span').css({'color':'#FFF'});
                    $('.load-selectlist').fadeOut(800);

                },800);

            }
        };
    }
