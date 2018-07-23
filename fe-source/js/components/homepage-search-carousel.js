/**
 * @function : rlutility
 * @description : use this for global email subscription modal functionality
 */
define(['jquery'], function($) { 
    'use strict';
    var hpSearchCarousel = {
        cache: {},
        init: function() {
            this.homePageCarousel();
        },
        initEvents: function() {
            //to init events
       },
        homePageCarousel: function(){
            var $carouselElement = $(".ig-hp-carousel");
            var $hpCarouselItemPos = $('.ig-hp-carousel-item');
            var $hpCarouselBtn = $('.hp-carousel-btn');
            if($carouselElement.length){
                $carouselElement.slick({
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    prevArrow: $('.hp-carousel-prev'),
                    nextArrow: $('.hp-carousel-next'),
                });
                this.carouseHeightHandle();     
                
            }
        },
        carouseHeightHandle: function() {
            var $bookingForm = $('.ig-form-validation');
            window.Parsley.on('field:validated', function() {
                if($(this.$element).hasClass('hpBookingForm')){
                    //setTimeout(function(){
                        var formHeight = $('.hpFlightSearch').height() + 200;
                        $('.ig-hp-carousel, .ig-hp-carousel .slick-list').css('height', formHeight+'px');
                    //}, 1)
                }
              });
        }
    }
    return hpSearchCarousel;
});