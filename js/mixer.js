$(function(){
    
/************************************ start mixin  *******************/
    $('.head ul li a').on('click',function(){
        $('.head ul li a').removeClass('active_link');
        $(this).addClass('active_link');
    })
    mixitup('.courses');
/************************************ end mixin  *******************/

})