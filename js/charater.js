$(function(){
    //開啟角色動作選單
    $(".charater").on("click",function(){
        if($(this).hasClass("firstPlayer"))
        {
            $(".memberList.forFirst")
            .addClass("active")
            .siblings().removeClass("active");
        }
    })

    $(".moveList").on('click',function(){
        $(this)
        .addClass("active")

        $(this).closest(".charater")
        .siblings().find(".moveList")
        .removeClass("active");
    })

    $(".moveList li").on("click",function(){
        //關閉角色動作選單
        setTimeout(function(){
            $(".moveList")
            .removeClass("active attackOnly");
        },100);

        //角色移動
        if($(this).hasClass("move"))
        {
            $(this).closest(".charater")
            .addClass("moving")
            .css("z-index","2")
            .siblings(".charater").addClass("disable")
            .css("z-index","1");

            $(".charater.moving .moveList")
            .css("pointer-events","none");

            $(".charater.moving .stepCount")
            .addClass("active");

            $(".ground").each(function(){
                var startLeft = Math.abs($(this).offset().left - $(".charater.moving").offset().left + 10);
                var startTop = Math.abs($(this).offset().top - $(".charater.moving").offset().top - 60);

                if(startLeft <= 130 && startTop <= 100 && !$(this).hasClass("first") && !$(this).hasClass("second"))
                {
                    $(this)
                    .addClass("readyStart");
                }
            })
        }

        //角色攻擊
        if($(this).hasClass("attack"))
        {
            $(this).closest(".charater")
            .addClass("attacking")
            .css("z-index","2")
            .siblings(".charater").addClass("disable")
            .css("z-index","1");

            $(".charater.attacking .moveList")
            .css("pointer-events","none");

            $(".charater.attacking .skillList")
            .addClass("active readyCancel");
        }

        //角色待機
        if($(this).hasClass("stay"))
        {
            $(this).closest(".charater")
            .addClass("nextTurn")
            .siblings(".charater").removeClass("disable");
            
            $(this).closest(".moveList")
            .css("display","none");
        }

        //取消選擇
        if($(this).hasClass("cancel"))
        {
            $(".charater")
            .removeClass("disable");
        }
    })
})