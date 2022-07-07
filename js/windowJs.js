$(function(){
    var box = $(".mainBox");
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
        var box = $(".mainBox");
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