$(document).ready(function(){

    'use strict'

    var run = {

        //VAR settings for slider
        width : $('#slider ul li').width(),
        animationSpeed : 700,
        pause : 900,
        currentSlide : 1,
        interval: 0,
        $slides: $('.slides'),//<ul> class
        $slide: $('.slide'),//<li> class
        $button_prev: $('.button_prev'),
        $button_next: $('.button_next'),

        init: function(){
            //run.startSlider();
            //run.$slides.on('mouseenter', run.pauseSlider).on('mouseleave', run.startSlider);
            run.eventListeners();
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
            console.log('');
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
            clearInterval(run.interval);
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
        },

        moveRight: function(){
            clearInterval(run.interval);
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