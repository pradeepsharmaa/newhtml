/**
 * @function : rlutility
 * @description : use this for global email subscription modal functionality
 */
define(['jquery'], function($) { 
    'use strict';
    var login = {
        cache: {},
        init: function() {
            this.initVariables();
            this.initEvents();
            //alert('Hello JS is working fine :) ');
        },
        initVariables: function() {
            this.cache = {
                $document :
                 $(document)
            }
        },
        initAjax: function() {},
        initEvents: function() {

        }
    }


    return login;
});