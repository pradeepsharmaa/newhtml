/**
 * @function : rlutility
 * @description : use this for any global utility functions
 */
define('utility', ['jquery', 'parsley'], function($, parsley){
    var utility = {
        /**
         * @function initModal
         * @description Global modal template initialize
         */
        floatingLabelsInit:  function() {       
        	window.Parsley.options.requiredMessage = 'The field cannot be empty';
        	function floatingLabel(onload) {
                var $input;
                $input = $(this);
                if (onload) {
                $.each($('.ig-input-group input'), function(index, value) {
                    var $current_input;
                    $current_input = $(value);
                    if ($current_input.val()) {
                    $current_input.closest('.ig-input-group').addClass('field-float');
                    }
                });
                }
                
                if($input.is( "input")){
                    setTimeout(function() {
                    
                        if ($input.val()) {
                            $input.closest('.ig-input-group').addClass('field-float');
                        } else {
                            $input.closest('.ig-input-group').removeClass('field-float');
                        }
                    }, 1);
                }
            }
            function addFocusOfParent(){
                $(this).parents('.ig-input-group').addClass('input-focused');
            }
        
            function removeFocusOfParent(){
                $(this).parents('.ig-input-group').removeClass('input-focused');
            }
            $('.ig-input-group input').on('keydown', floatingLabel);
            $('.ig-input-group input').on('change', floatingLabel);  
            $('.ig-input-group input').on('focus', addFocusOfParent);
            $('.ig-input-group input').on('blur', removeFocusOfParent);        
        
            if($('.ig-form-validation').length){
                $('.ig-form-validation').parsley();
                $('.ig-form-validation').parsley().on('form:error', function() {
                    $.each(this.fields, function(key, field) {
                        if (field.validationResult !== true) {
                            field.$element.closest('.ig-input-group').addClass('has-error');
                        }
                    });
                });
                    
                $('.ig-form-validation').parsley().on('field:validated', function() {
                    if (this.validationResult === true) {
                    this.$element.closest('.ig-input-group').removeClass('has-error');
                    } else {
                    this.$element.closest('.ig-input-group').addClass('has-error');
                    var parsleyError = true;
                    return parsleyError;
                    }
                });
            }
            floatingLabel(true);
        }
    };
    return utility;
});