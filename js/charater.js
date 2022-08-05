$(function(){
    //開啟角色動作選單
    $(".moveList").on('click',function(){
        $(".moveList")
        .addClass("active");
    })

    $(".moveList li").on("click",function(){
        //關閉角色動作選單
        setTimeout(function(){
            $(".moveList")
            .removeClass("active");
        },100);

        //角色移動
        if($(this).hasClass("move"))
        {
            $(".moveList")
            .css("pointer-events","none");

            $(this).closest(".charater")
            .addClass("moving");

            $(".charater .stepCount")
            .addClass("active");

            $(".ground").each(function(){
                var startLeft = Math.abs($(this).offset().left - $(".charater.moving").offset().left + 10);
                var startTop = Math.abs($(this).offset().top - $(".charater.moving").offset().top - 60);

                if(startLeft <= 130 && startTop <= 100 && !$(this).hasClass("first"))
                {
                    $(this)
                    .addClass("readyStart");
                }
            })
        }
    })
})