/**
 * @description global.js 
 */
require.config({
    waitSeconds: 140,
    paths: {
        // Libraries
        'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
        'require': '../bower_components/requirejs/require',
        'jquery': '../bower_components/jquery/jquery.min',
        'parsley': '../bower_components/parsleyjs/dist/parsley.min',
        'handlebars': '../bower_components/handlebars/handlebars.min',
       

        //templates folder
        'templates': '../compiledTemplates',

        // custom helpers
        'ajaxFactory': 'helpers/ajax.factory',
        'viewportDetect': 'helpers/viewport-detect',
        'hbshelpers': 'helpers/handlebars-helpers',
        'matchMedia': 'helpers/matchMedia',
        'typeahead': 'helpers/typeahead',

        //global components
        'globalHeader': 'components/global-header',
    },
    shim: {
        // define JS dependencies here, plugins (non-amd compliant) need this shim config
        'typeahead': {
            deps: ['bootstrap']
        },'bootstrap': {
            deps: ['jquery']
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
        }
    }
});


/**
 * @function Global Module Loader
 * @description : use this for any global functionality
 */
define('global', ['jquery', 'bootstrap', 'parsley', 'globalHeader'],
    function($, bootstrap, parsley, login) {
        'use strict';
        var indigoGlobal = {
            init: function() {
                login.init();
            }
        }

        $(function() {
            indigoGlobal.init();
        });

        return indigoGlobal;
    });