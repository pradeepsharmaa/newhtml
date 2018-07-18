/**
 * @description global.js 
 */
require.config({
    waitSeconds: 140,
    paths: {
        // Libraries
        'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.bundle.min',
        'require': '../bower_components/requirejs/require',
        'jquery': '../bower_components/jquery/dist/jquery.min',
        'parsley': '../bower_components/parsleyjs/dist/parsley.min',
        'handlebars': '../bower_components/handlebars/handlebars.min',
    
        //templates folder
        'templates': '../compiledTemplates',

        // custom helpers
        'ajaxFactory': 'helpers/ajax.factory',
        'popper' : 'helpers/popper.min',
        'viewportDetect': 'helpers/viewport-detect',
        'hbshelpers': 'helpers/handlebars-helpers',
        'matchMedia': 'helpers/matchMedia',
        'typeahead': 'helpers/typeahead',
        'slick': 'helpers/slick.min',

        //global components
        'globalHeader': 'components/global-header',
    },
    shim: {
        // define JS dependencies here, plugins (non-amd compliant) need this shim config
        'typeahead': {
            deps: ['bootstrap']
        },'bootstrap': {
            deps: ['jquery']
        },'bootstrap': {
            deps: ['popper']
        },
        'matchMedia': {
            deps: ['jquery']
        },
        'viewportDetect': {
            deps: ['matchMedia']
        },
        'handlebars': {
            deps: ['jquery']
        },
        'require': {
            deps: ['jquery']
        },
        'parsley': {
            deps: ['jquery']
        },
        'slick': {
            deps: ['jquery']
        }
    }
});


/**
 * @function Global Module Loader
 * @description : use this for any global functionality
 */
define('global', ['jquery', 'slick', 'popper', 'bootstrap', 'parsley', 'globalHeader'],
    function($, slick, popper, bootstrap, parsley, login) {
        //'use strict';
        var indigoGlobal = {
            init: function() {
                login.init();
                this.homePageCarousel();
                this.footerAccordian();
                if(window.innerWidth < 1000){
                   this.indigoCommonCarousel($('.benefitscarousel'));
                   this.indigoCommonCarousel($('.sixEextrascarousel'));    
                }
            },
            homePageCarousel: function(){
                var $carouselElement = $(".ig-hp-carousel");
                if($carouselElement.length){
                    $carouselElement.slick({
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        adaptiveHeight: true


                    });
                }
            },

            



















            










































































































































            footerAccordian: function(){
                var $showElement = $("#accordion .collapse");
                if($(window).innerWidth() <= 768) {
                  $showElement.addClass("hide");
                } else {
                   $showElement.addClass("show");
                }
            },

             indigoCommonCarousel: function(className){
                if(className.length){
                    className.slick({
                        dots: false,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        autoplay: false,
                        adaptiveHeight: false,
                        infinite: false
                    });
                }
            }
        }

        $(function() {
            indigoGlobal.init();
        });

        return indigoGlobal;
    });