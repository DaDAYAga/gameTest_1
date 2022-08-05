$(function(){
    //中心點取值
    var centerX = $(".center").offset().left;
    var centerY = $(".center").offset().top;

    //頁面拉伸時中心點重新定位
    $(window).resize(function(){
        $(".gameWindow")
        .css({
            left: 50 + "%",
            top: 50 + "%"
        })

        setTimeout(function(){
            centerX = $(".center").offset().left;
            centerY = $(".center").offset().top;
        },300);
    })

    //頁面回位/重整樣式
    $(".reBtn").on("click",function(){
        $(".gameWindow")
        .css({
            "transform":"translate(-50%,-50%) scale(0.4)",
            left: 50 + "%",
            top: 50 + "%",
        })

        $(".positionMap")
        .addClass("display");

        setTimeout(function(){
            centerX = $(".center").offset().left;
            centerY = $(".center").offset().top;
        },300);
    })

    //角色點擊時
    $(".charater").on("click",function(){
        var targetX = $(this).offset().left;
        var targetY = $(this).offset().top;

        var x = targetX - centerX;
        var y = targetY - centerY;
        var moveX = Math.abs(x);
        var moveY = Math.abs(y);

        var windowX = $(".gameWindow").offset().left;
        var windowY = $(".gameWindow").offset().top;

        var width = $(this).width() / 2;
        var height = $(this).height() / 2;

        if(targetX >= centerX)
        {
            $(".gameWindow").offset({
                left: windowX - moveX - width,
            })
        }
        else
        {
            $(".gameWindow").offset({
                left: windowX + moveX - width,
            })
        }
        if(targetY >= centerY)
        {
            $(".gameWindow").offset({
                top: windowY - moveY - height,
            })
        }
        else
        {
            $(".gameWindow").offset({
                top: windowY + moveY - height,
            })
        }
    })

    //重新定位
    $(".positionMap").on("click",function(e){
        var xPos = e.pageX;
        var yPos = e.pageY;

        var windowX = $(".gameWindow").offset().left;
        var windowY = $(".gameWindow").offset().top;

        if(xPos >= centerX)
        {
            $(".gameWindow").offset({
                left: windowX - 350
            })
        }
        else
        {
            $(".gameWindow").offset({
                left: windowX + 350
            })
        }
        if(yPos >= centerY)
        {
            $(".gameWindow").offset({
                top: windowY - 350
            })
        }
        else
        {
            $(".gameWindow").offset({
                top: windowY + 350
            })
        }

        $(".gameWindow")
        .css("transform","translate(-50%,-50%) scale(1)");

        $(".positionMap")
        .removeClass("display");
    })
})