$(document).ready(function(){


    // product img into zoom section

    $('.zoom-1').click(function(){
      var imgSrc =  $(this).attr('src');
      $('.zooming-1').attr('src',imgSrc);
    });

    // MEGA CATEGORY HOVER

    $(".categi_list").hover(function(){
        $('.category-mega').css({
            "display":"flex"
        });
    },function(){
        $('.category-mega').css({
            "display":"none"
        });
    });

    $(".listing > li").hover(function(){
        $(".cat-list-data").hide();
       var className = $(this).attr('id');
       $("."+className).css({
        "display":"flex"
       });
    });

    // ADD CART REMOVING 

    $('.cart-add-cate-remove').click(function(){
        $('.card-add-cate-list').remove();
    });
});
