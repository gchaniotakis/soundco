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
});



$('#menu-item-1').click(function(){
    try{
        if(!$('#menu-item-1').hasClass("active")){
            $('.nav-item.active').removeClass("active");
            $('#menu-item-1').addClass("active");            
        }
    }
    catch(e){
        console.log(e);
    }
});

$('#menu-item-2').click(function(){
    try{
        if(!$('#menu-item-2').hasClass("active")){
            $('.nav-item.active').removeClass("active");
            $('#menu-item-2').addClass("active");            
        }
    }
    catch(e){
        console.log(e);
    }
});

$('#menu-item-3').click(function(){
    try{
        if(!$('#menu-item-3').hasClass("active")){
            $('.nav-item.active').removeClass("active");
            $('#menu-item-3').addClass("active");            
        }
    }
    catch(e){
        console.log(e);
    }
});

$('#menu-item-4').click(function(){
    try{
        if(!$('#menu-item-4').hasClass("active")){
            $('.nav-item.active').removeClass("active");
            $('#menu-item-4').addClass("active");            
        }
    }
    catch(e){
        console.log(e);
    }
});

$('#menu-item-5').click(function(){
    try{
        if(!$('#menu-item-5').hasClass("active")){
            $('.nav-item.active').removeClass("active");
            $('#menu-item-5').addClass("active");            
        }
    }
    catch(e){
        console.log(e);
    }
});

$('#menu-item-6').click(function(){
    try{
        if(!$('#menu-item-6').hasClass("active")){
            $('.nav-item.active').removeClass("active");
            $('#menu-item-6').addClass("active");            
        }
    }
    catch(e){
        console.log(e);
    }
});

$('#gr-desk').click(function(){
    try{
        if($('#gr-desk').hasClass("lang")){
            $('#gr-desk').addClass("lang-selected").removeClass("lang");
            $('#en-desk').addClass("lang").removeClass("lang-selected");
        }        
    }
    catch(e){
        console.log(e);
    }    
});

$('#gr-mobile').click(function(){
    try{
        if($('#gr-mobile').hasClass("lang")){
            $('#gr-mobile').addClass("lang-selected").removeClass("lang");
            $('#en-mobile').addClass("lang").removeClass("lang-selected");
        }        
    }
    catch(e){
        console.log(e);
    }    
});

$('#en-desk').click(function(){
    try{
        if($('#en-desk').hasClass("lang")){
            $('#en-desk').addClass("lang-selected").removeClass("lang");
            $('#gr-desk').addClass("lang").removeClass("lang-selected");
        }        
    }
    catch(e){
        console.log(e);
    }    
});

$('#en-mobile').click(function(){
    try{
        if($('#en-mobile').hasClass("lang")){
            $('#en-mobile').addClass("lang-selected").removeClass("lang");
            $('#gr-mobile').addClass("lang").removeClass("lang-selected");
        }        
    }
    catch(e){
        console.log(e);
    }    
});

$('.search').click(function(){
    $('#searchform').show();
});
