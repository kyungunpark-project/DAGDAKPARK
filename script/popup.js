$(function(){
    $(".big_box> div:nth-child(1)").click(function(){
        $(".popup1").fadeIn();//show()
    });
    $(".big_box> div:nth-child(2)").click(function(){
        $(".popup2").fadeIn();//show()
    });
    $(".big_box> div:nth-child(3)").click(function(){
        $(".popup3").fadeIn();//show()
    });

    $(".popup a").click(function(){
        $(".popup").fadeOut();//hide()
    });
});
