$(function(){
    var n = 1;

    $(".ground").each(function(){
        $(this)
        .addClass("g"+ n +"");

        n ++;
    })
})