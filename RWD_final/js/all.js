$(function (){
    var $win = $(window);    
    // 當使用者滾動到離頂部 100px 時，展示回到最上層功能按鈕
    $win.scroll(function (){
        if ($win.scrollTop() > 100){    
            $(".goTop").fadeIn(200);
        } else{    
            $(".goTop").fadeOut(200);
        }    
    });
    // 回到最上層功能按鈕
    $(document).ready(function(){
        $('.goTop').click(function(event){
            event.preventDefault();
            $('html, body').animate({
            scrollTop: 0
            }, 500);
        });
    });
});
