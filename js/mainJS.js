$(function(){
    var centerX = $(".center").offset().left;
    var centerY = $(".center").offset().top;

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

    $(".reBtn").on("click",function(){
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
})

$(function(){
    var box = $(".testBox");
    var ww = window.innerWidth;
    var wh = window.innerHeight;

    if(ww >= 1344)
    {
        box.css("width", (String(ww - 320) + "px"));
    }
    else
    {
        box.css("width", (String(1024) + "px"));
    }
    if(wh >= 845)
    {
        box.css("height", (String(wh - 77) + "px"));
    }
    else
    {
        box.css("height", (String(768) + "px"));
    }

    $(window).resize(function () {
        var box = $(".testBox");
        var ww = window.innerWidth;
        var wh = window.innerHeight;

        if(ww >= 1344)
        {
            box.css("width", (String(ww - 320) + "px"));
        }
        else
        {
            box.css("width", (String(1024) + "px"));
        }
        if(wh >= 845)
        {
            box.css("height", (String(wh - 77) + "px"));
        }
        else
        {
            box.css("height", (String(768) + "px"));
        }
    });
})