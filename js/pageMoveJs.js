//關閉右鍵選單
$(document).bind("contextmenu",function(){
    return false;
})

//頁面拉動效果
var xPos
var yPos
$(".mainBox").on("mousedown",function(e){
    if(e.which == 3)
    {
        xPos = e.pageX;
        yPos = e.pageY;
    }
})
var xMove;
var yMove;
$(".mainBox").on("mouseup",function(e){
    if(e.which == 3)
    {
        xMove = e.pageX;
        yMove = e.pageY;

        var x = xMove - xPos;
        var y = yMove - yPos;

        var windowX = $(".gameWindow").offset().left;
        var windowY = $(".gameWindow").offset().top;

        setTimeout(function(){
            $(".gameWindow").offset({
                left: windowX + x * 1.25
            })
            $(".gameWindow").offset({
                top: windowY + y * 1.25
            })
        },0)
    }
})