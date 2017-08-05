//Revealing Module Pattern 
//** No need for an 'init function' this automaticallay Initializes **
//** Javascript in html must be after body for DOM elements to Initialize **

var run = (function(){

    'use strict'

    var $animationSpeed = 300,
        $pause =  2000,
        $currentSlide = 1,
        $interval = 0,

        //Cache DOM
        $newSlide = addDomElement( $('#slider ul li:eq(0)'),  $('#slider ul')),
        $width = $('#slider ul li').width(),
        $slides = $('.slides'),//<ul> class
        $slide = $('.slide'),//<li> class
        $button_prev = $('.button_prev'),
        $button_next = $('.button_next');

    //Click Events
    $button_prev.on('click', function(){
        moveLeft();
    });

    $button_next.on('click', function(){
        moveRight();
    });

    //Start Module
    runModule();


    //METHODS
    function runModule(){
        //creates final <li> which is first <li>
        addDomElement( 
            $('#slider ul li:eq(0)'),  
            $('#slider ul'), 
        );
        console.log('$slide.length ',$slide.length);
    }

    function addDomElement(objectToClone, placeNewObject, callBack){
        objectToClone.clone().appendTo(placeNewObject);
        console.log('Dom Element ',objectToClone, ' Position ',placeNewObject);
    }

    function startSlider() {
        $interval = setInterval(function() {
            $slides.animate({'margin-left': '-='+$width}, $animationSpeed, function() {
                if (++$currentSlide === $slide.length) {
                    $currentSlide = 1;
                    $slides.css('margin-left', 0);
                }
            });
            }, $pause);
        console.log('$slide.length ',$slide.length);
    }

    function $pauseSlider() {
        clearInterval($interval);
    }


    function moveLeft(){
        clearInterval($interval);
        if ($currentSlide === 1) {
            $currentSlide = $slide.length;
            $slides.css({'margin-left': '-' + $width * ($slide.length - 1) + 'px'});
            $slides.animate({'margin-left': '+=' + $width}, $animationSpeed, function () {
                $currentSlide--;
            });
        } else {
            $slides.animate({'margin-left': '+=' + $width}, $animationSpeed, function () {
                $currentSlide--;
            });
        }
        console.log('CurrentSlide ',$currentSlide);
    }

    function moveRight(){
        clearInterval($interval);
        $slides.animate({'margin-left': '-='+$width}, $animationSpeed, function() {
            if (++$currentSlide === $slide.length) {
                $currentSlide = 1;
                $slides.css('margin-left', 0);
            }
            console.log('CurrentSlide ',$currentSlide);
        });
    }

    //can be accessed globally
    return {
        runModule: runModule,
        startSlider: startSlider,
        moveLeft: moveLeft,
        moveRight: moveRight
    }

})();



