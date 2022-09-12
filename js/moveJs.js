$(function(){
    //開場定位
    $(".charater.firstPlayer").offset({
        left: $(".ground.first").offset().left + 10,
        top: $(".ground.first").offset().top - 60
    })
    $(".charater.secondPlayer").offset({
        left: $(".ground.second").offset().left + 10,
        top: $(".ground.second").offset().top - 60
    })   

    //地板點擊時
    var arr;
    var n;

    $(".ground").on("click",function(){
        //判定主角左轉右轉
        if($(this).offset().left < $(".charater.moving").offset().left)
        {
            $(".charater.moving,.charater .moveList,.charater.moving .stepCount,.charater.moving .skillList")
            .css("transform","scaleX(-1)");
        }
        else
        {
            $(".charater.moving,.charater .moveList,.charater.moving .stepCount,.charater.moving .skillList")
            .css("transform","scaleX(1)");
        }

        //初始位置
        var startRangeLeft = Math.abs($(this).offset().left - $(".charater.moving").offset().left + 10);
        var startRangeTop = Math.abs($(this).offset().top - $(".charater.moving").offset().top - 60);

        if(startRangeLeft <= 130 && startRangeTop <= 100 && !$(".ground.start").length && !$(this).hasClass("first") && !$(this).hasClass("second"))
        {
            $(this)
            .addClass("start")

            $(".ground")
            .removeClass("readyStart");

            //顯示下一步
            $(".ground").each(function(){
                var targetLeft = Math.abs($(this).offset().left - $(".ground.start").offset().left);
                var targetTop = Math.abs($(this).offset().top - $(".ground.start").offset().top);

                if(targetLeft <= 130 && targetTop <= 100 && !$(this).hasClass("start") && !$(this).hasClass("first") && !$(this).hasClass("second"))
                {
                    $(this)
                    .addClass("readyTarget");
                }
            })

            //剩餘步數
            $(".stepCount p")
            .text("剩餘步數 1 步");
        }

        //終點位置
        var targetRangeLeft = Math.abs($(this).offset().left - $(".ground.start").offset().left);
        var targetRangeTop = Math.abs($(this).offset().top - $(".ground.start").offset().top);

        if(targetRangeLeft <= 130 && targetRangeTop <= 100 && !$(this).hasClass("start") && !$(this).hasClass("first") && !$(this).hasClass("second"))
        {
            $(this)
            .addClass("target")

            $(".ground")
            .removeClass("readyTarget");

            //出現確認移動按鈕
            $(".charater.moving .moveCheck")
            .addClass("display");

            //剩餘步數
            $(".stepCount p")
            .text("剩餘步數 0 步");
        }

        //擺放終點至起始位置下方
        $(".ground.start")
        .after($(".ground.target"));

        //起始位置重複點擊時
        if($(this).hasClass("start") && $(this).find("p").length)
        {
            $(this).find("p")
            .remove();

            $(this)
            .removeClass("start");

            $(".ground")
            .removeClass("readyTarget");

            //重新顯示可點擊起始位置
            $(".ground").each(function(){
                var startLeft = Math.abs($(this).offset().left - $(".charater.moving").offset().left + 10);
                var startTop = Math.abs($(this).offset().top - $(".charater.moving").offset().top - 60);
    
                if(startLeft <= 130 && startTop <= 100  && !$(this).hasClass("first") && !$(this).hasClass("second"))
                {
                    $(this)
                    .addClass("readyStart");
                }
            })

            //剩餘步數
            $(".stepCount p")
            .text("剩餘步數 2 步");
        }

        //終點位置重複點擊時
        if($(this).hasClass("target") && $(this).find("p").length)
        {
            $(this).find("p")
            .remove();

            $(this)
            .removeClass("target");

            //重新顯示可點擊終點位置
            $(".ground").each(function(){
                var targetLeft = Math.abs($(this).offset().left - $(".ground.start").offset().left);
                var targetTop = Math.abs($(this).offset().top - $(".ground.start").offset().top);

                if(targetLeft <= 130 && targetTop <= 100 && !$(this).hasClass("start") && !$(this).hasClass("first") && !$(this).hasClass("second"))
                {
                    $(this)
                    .addClass("readyTarget");
                }
            })

            //剩餘步數
            $(".stepCount p")
            .text("剩餘步數 1 步");

            //關閉確認移動按鈕
            $(".moveCheck")
            .removeClass("display");
        }

        //加入計算物
        $(".ground.start,.ground.target")
        .append("<p></p>");

        //當終點位置出現時其他位置不可選
        if($(".ground").hasClass("target"))
        {
            $(".ground.target")
            .siblings(".ground").css("pointer-events","none");
        }
        else
        {
            $(".ground")
            .css("pointer-events","visible");
        }

        //遍歷
        n = 0;
        arr = [];

        $($(".ground").has("p")).each(function(){
            arr[n] = $(this).offset();

            n++;
        })
    })

    //確認移動
    $(".moveCheck").on("click",function(){
        //重置
        $(".charater.moving .moveList")
        .css("pointer-events","visible");
        $(".charater.moving .stepCount")
        .removeClass("active");
        $(".charater.moving .moveCheck")
        .removeClass("display");

        //第一次移動
        $(".charater.moving").offset({
            left: arr[0].left + 10,
            top: arr[0].top - 60
        })

        //第二次移動
        setTimeout(function(){
            $(".charater.moving").offset({
                left: arr[1].left + 10,
                top: arr[1].top - 60
            })

            $(".charater")
            .removeClass("moving");
        },300);

        //移除計算物
        $(".ground.start,.ground.target").find("p")
        .remove();

        //加入不可選起始位置
        if($(this).closest(".charater").hasClass("firstPlayer"))
        {
            $(".ground.target")
            .addClass("first")
            .siblings().removeClass("first");
        }
        else if($(this).closest(".charater").hasClass("secondPlayer"))
        {
            $(".ground.target")
            .addClass("second")
            .siblings().removeClass("second");
        }

        //移除起始+終點位置標籤
        $(".ground")
        .removeClass("start target");

        //所有位置可選
        $(".ground").css("pointer-events","visible");

        //剩餘步數重置
        setTimeout(function(){
            $(".stepCount p")
            .text("剩餘步數 2 步");
        },300);

        //重啟動作選單
        $($(this).closest(".charater")).find(".moveList")
        .css("pointer-events","visible")
        .addClass("active attackOnly");
    })

    //否決移動
    $(".moveCancel").on("click",function(){
        //移除移動點+提示
        $(".ground")
        .removeClass("readyStart readyTarget start target")
        .css("pointer-events","visible")
        .find("p").remove();

        //移除movingClass
        $(".charater")
        .removeClass("moving");

        //移除移動提示
        $(".charater .stepCount")
        .removeClass("active");
        $(".moveCheck")
        .removeClass("display");

        //重啟動作選單
        $($(this).closest(".charater")).find(".moveList")
        .css("pointer-events","visible")
        .addClass("active");

        //剩餘步數重置
        setTimeout(function(){
            $(".stepCount p")
            .text("剩餘步數 2 步");
        },300);
    })
})