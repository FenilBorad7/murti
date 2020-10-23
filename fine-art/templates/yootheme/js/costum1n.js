 jQuery('.va-slid').slick({dots: true,infinite: false});


jQuery('.bg-pay input:radio').click(function(){

jQuery('.bg-pay input:radio').parent().removeClass('focus-pay');

jQuery(this).parent().parent().find('input:radio').each(function(){
if (jQuery(this).is(':checked')) {
    jQuery(this).parent().addClass('focus-pay');
  } else {
    jQuery(this).parent().removeClass('focus-pay');
  }
});
});
          
  
    let url = window.location.href
          let params = url.split('?layout');
          if(params.length > 1){
    jQuery('.slogin-avatar').addClass('hidden-class')
    jQuery(".tm-bottom").addClass("hidden-class2")
}     



 