$(function(){

// start go to section and active color 
$('.list li a').on('click',function(){
    $(this).addClass('active_a').parent('li').siblings().children('a').removeClass('active_a');

    
    $('body,html').animate({
        scrollTop:$($(this).data('scroll')).offset().top-50
    },1000)
});
// end go to section and avtive color 
$('.nav_courses .dropdown-menu a').on('click',function(){
    $(this).addClass('active_back').siblings().removeClass('active_back')
});




/************************************ start slider  *******************/
    var owl = $(".cours");
    owl.owlCarousel({
        items : 3, //10 items above 1000px browser width
        itemsDesktop : [1000,2], //3 items between 1000px and 901px
        itemsDesktopSmall : [900,2], // betweem 900px and 601px
        itemsTablet: [768,1], //2 items between 600 and 0
        itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
    });
    owl.trigger('owl.play',1500);// auto work
    owl.trigger('owl.stop');

    /* Custom Navigation Events
    $(".next").click(function(){
        owl.trigger('owl.next');
    })
    $(".prev").click(function(){
        owl.trigger('owl.prev');
    })
    $(".play").click(function(){
        owl.trigger('owl.play',2000); //owl.play event accept autoPlay speed as second parameter
    })
    $(".stop").click(function(){
        owl.trigger('owl.stop');
    });  */

    var owl_2 = $(".tech");
    owl_2.owlCarousel({
        items : 4, //10 items above 1000px browser width
        itemsDesktop : [1000,3], //3 items between 1000px and 901px
        itemsDesktopSmall : [900,2], // betweem 900px and 601px
        itemsTablet: [600,1], //2 items between 600 and 0
        itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
    });
    owl_2.trigger('owl.play',1500);// auto work
    owl_2.trigger('owl.stop');



    var owl_3 = $(".about");
    owl_3.owlCarousel({
        items : 3, //10 items above 1000px browser width
        itemsDesktop : [1000,3], //3 items between 1000px and 901px
        itemsDesktopSmall : [900,2], // betweem 900px and 601px
        itemsTablet: [600,1], //2 items between 600 and 0
        itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
    });
    owl_3.trigger('owl.play',2500);// auto work
    owl_3.trigger('owl_3.stop');
    
/************************************ end  slider  *******************/



// start scroll to top  
$(window).on('scroll',function(){
    if($(this).scrollTop()>1000){
        $('.scroll_top').fadeIn(1000);
    }else{
        $('.scroll_top').fadeOut(1000);
    }
});
$(".scroll_top").on('click',function(){
    $('html,body').animate({
        scrollTop:0
    },2000)
});
// end scroll to top  
})//end page