var windowSize = $(window).width();
$('document').ready(function(){
    try{
        if(windowSize < 922){
            $('.language-selector').hide();
            $('#mobilelangselector').show();
        }
    }
    catch(e){
        console.log(e);
    }
})