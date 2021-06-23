$(document).ready(function(){
    // Dropdown
    $('.dropdownBtn').click(function (event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).parent().find('.dropdownList').slideToggle();
        $(this).parent().siblings().find('.dropdownList').slideUp();
    })

    //Swiper
    var swiper = new Swiper(".mySwiper", {
    loop:true,
    autoplay:{
        delay:2000,
    },
    pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
   });
  
   //goTop
   var $win = $(window);    
    $win.scroll(function (){
        if ($win.scrollTop() > 100){    
            $(".goTop").fadeIn(500);
        } else{    
            $(".goTop").fadeOut(500);
        }    
    });
    $(document).ready(function(){
        $('.goTop').click(function(event){
            event.preventDefault();
            $('html, body').animate({
            scrollTop: 0
            }, 500);
        });
    });
  });