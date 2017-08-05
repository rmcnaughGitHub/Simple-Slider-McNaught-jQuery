//Module Pattern 

$(document).ready(function(){

    'use strict'

    var run = {

        animationSpeed : 500,
        pause : 2000,
        currentSlide : 1,
        interval: 0,
        //Cache Dom
        /*duplicates first 
        <li class=" slide1"><li>*/
        $newSlide : $('#slider ul li:eq(0)').clone().appendTo( $('#slider ul') ),
        width : $('#slider ul li').width(),
        $slides: $('.slides'),//<ul> class
        $slide: $('.slide'),//<li> class
        $button_prev: $('.button_prev'),
        $button_next: $('.button_next'),

        init: function(){
            this.eventListeners();    
        },


        addDomElement: function(objectToClone, placeNewObject, callBack){
            objectToClone.clone().appendTo(placeNewObject);
            console.log('Dom Element ',objectToClone, ' Position ',placeNewObject);
        },

        startSlider: function() {
            run.interval = setInterval(function() {
                run.$slides.animate({'margin-left': '-='+run.width}, run.animationSpeed, function() {
                    if (++run.currentSlide === run.$slide.length) {
                        run.currentSlide = 1;
                        run.$slides.css('margin-left', 0);
                    }
                });
                }, run.pause);
            console.log('$slide.length ',run.$slide.length);
        },

        pauseSlider: function() {
            clearInterval(run.interval);
        },

        eventListeners: function (){
            run.$button_prev.on('click', function(){
                run.moveLeft();
            });

            run.$button_next.on('click', function(){
                run.moveRight();
            });
        },

        moveLeft: function(){
            run.pauseSlider;
            if (run.currentSlide === 1) {
                run.currentSlide = run.$slide.length;
                run.$slides.css({'margin-left': '-' + run.width * (run.$slide.length - 1) + 'px'});
                run.$slides.animate({'margin-left': '+=' + run.width}, run.animationSpeed, function () {
                    run.currentSlide--;
                });
            } else {
                run.$slides.animate({'margin-left': '+=' + run.width}, run.animationSpeed, function () {
                    run.currentSlide--;
                });
            }
            console.log('CurrentSlide ',run.currentSlide);
        },

        moveRight: function(){
            run.pauseSlider;
            run.$slides.animate({'margin-left': '-='+run.width}, run.animationSpeed, function() {
                if (++run.currentSlide === run.$slide.length) {
                    run.currentSlide = 1;
                    run.$slides.css('margin-left', 0);
                }
                console.log('CurrentSlide ',run.currentSlide);
            });
        }

        

    }

    //RUN
    run.init();

});