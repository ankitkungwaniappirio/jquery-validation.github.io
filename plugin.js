(function ($) {
  $.fn.validateForm = function (options) {

    $(this).find('input[type=text], input[type=email], input[type=password]').each(function () {
       if($(this).attr('required')) {
         $(this).on('change',function () {
           if($(this).val() === '') {
             $(this).parent().append('<p class="errorMessage" style="color:red;font-size: 10"> error: please enter value</p>');
           }
           else {
             $(this).parent().find('.errorMessage').remove();
           }
         })
       }
    });
  };
  $("form").submit(function(){
     console.log('hsdgs');
    $(this).find('input[type=text], input[type=email], input[type=password]').each(function () {
       if($(this).attr('required')) {
         console.log('hsdgs');
           if($(this).val() === '') {
             console.log($(this).parent);
             alert('please enter the required value');
           }
       }
    });
});
})(jQuery);