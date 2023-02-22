$(window).scroll(function(){
    if ($(this).scrollTop() > 500) {
       $('#dynamic').addClass('newClass');
    } else {
       $('#dynamic').removeClass('newClass');
    }
});