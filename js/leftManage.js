/*点击返回*/
    $('.reback').click(function(){
         var li = $(this).parent().parent();
        $(this).css('display','none');
        $(this).prev().css('display','inline-block');
        var liheight = $(li).height();   
        var topHeight = liheight-40;
        /*设置定时器高度增加*/
        timer = setInterval(function(){
            if(liheight <= topHeight){            
                clearInterval(timer);
            }
            else{
                liheight -= 1;
                $(li).css({'height':liheight});
            }

        },30);
         var ll = $(this).parent().next();
        $(ll).css('display','none');

    });

  /*点击回复*/
  $('.delList').click(function(){
    var li = $(this).parent().parent();
    $(this).css('display','none');
    $(this).next().css('display','inline-block');
    var liheight = $(li).height();   
    var topHeight = liheight+40;
    /*设置定时器高度增加*/
    timer = setInterval(function(){
        if(liheight >= topHeight){            
            clearInterval(timer);
        }
        else{
            liheight +=1;
            $(li).css({'height':liheight});
        }

    },30);
    var ll = $(this).parent().next();
    $(ll).css('display','block');
    /*回复隐藏*/


    /*记录留言ID*/
    var ttel = $(this).parent().next().find('p').text();
    $(this).parent().next().find('input.sayID').val(ttel);
  });   
/*$('.leftList').find('li').mouseout(function(){
    $(this).find('.delList').css('display','none');
});
$('.leftList').find('li').mouseover(function(){
    $(this).find('.delList').css('display','block');
});
*/
