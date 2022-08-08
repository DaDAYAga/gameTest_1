//offset().top 間距最小值 95
//offset().left 間距最小值 63 間距最大值 126
$(function(){
    $(".skillList li").on("click",function(){
        $(".skillList")
        .removeClass("active");

        //測試用-遠程射擊
        if($(this).hasClass("test_1"))
        {
            var topN = $(".ground.first").offset().top;
            var leftN = $(".ground.first").offset().left

            $(".ground").each(function(){
                var a = Math.abs(topN - $(this).offset().top);
                var b = Math.abs(leftN - $(this).offset().left);
                var ans = a + b;

                if(ans / 158 > 1 && ans / 158 <= 2)
                {
                    $(this)
                    .addClass("skillRange");
                }
            })
        }

        //測試用-戰術位移
        if($(this).hasClass("test_2"))
        {
            var topN = $(".ground.first").offset().top;
            var leftN = $(".ground.first").offset().left

            $(".ground").each(function(){
                var a = Math.abs(topN - $(this).offset().top);
                var b = Math.abs(leftN - $(this).offset().left);
                var ans = a + b;

                if(ans / 158 > 1 && ans / 158 <= 2 && b != 0 && ans != 284)
                {
                    $(this)
                    .addClass("skillRange");
                }
            })
        }
        
        //測試用-獵鷹突擊
        if($(this).hasClass("test_3"))
        {
            var topN = $(".ground.first").offset().top;
            var leftN = $(".ground.first").offset().left

            $(".ground").each(function(){
                var a = Math.abs(topN - $(this).offset().top);
                var b = Math.abs(leftN - $(this).offset().left);
                var ans = a + b;

                if(ans % 158 == 0 && ans / 158 < 3 || a == 0 && b <= 252)
                {
                    $(this)
                    .addClass("skillRange");
                }
            })

            $(".ground.first")
            .removeClass("skillRange");
        }

        //測試用-箭雨
        if($(this).hasClass("test_4"))
        {
            var topN = $(".ground.first").offset().top;
            var leftN = $(".ground.first").offset().left

            $(".ground").each(function(){
                var a = Math.abs(topN - $(this).offset().top);
                var b = Math.abs(leftN - $(this).offset().left);
                var ans = a + b;

                if(ans / 158 > 1 && ans / 158 <= 3 && ans % 158 != 64)
                {
                    $(this)
                    .addClass("skillRange arrowRain");
                }
            })
        }
    })

    //招式取消
    $(".skillList .skillCancel").on("click",function(){
        
        if($(".ground").hasClass("skillRange"))
        {
            $(".ground")
            .removeClass("skillRange");

            $(".skillList")
            .addClass("active");
        }
        else {
            $(".skillList")
            .removeClass("active readyCancel");

            $(".moveList")
            .addClass("active")
            .css("pointer-events","visible");
        }
    })

    //箭雨判定
    $(document).on("click",".arrowRain",function(){
        var topN = $(this).offset().top;
        var leftN = $(this).offset().left;

        $(".ground").each(function(){
            $(this)
            .removeClass("skillRange");

            var a = Math.abs($(this).offset().top - topN)
            var b = Math.abs($(this).offset().left - leftN)

            if(a == 95 && b == 63 || a == 0 && b == 126 || a == 0 & b == 0)
            {
                $(this)
                .addClass("skillRange");
            }
        })
    })
})