$(function(){
    //var timer = null;
    //var img = $(".crousel li"),length;
    // var list = $(".list li").length;

    //标题的背景样式
    $(".nav li").click(function(){
        $(this).addClass('nav_a').siblings('li').removeClass('nav_a');
    })
    $(".article_list ul li").click(function(){
         //获取a元素的父级元素li的索引值存进变量num 可能的值分别为 0,1,2,3,4
        var num = $(this).index(); //parent()  父级
        var move = num * -100 + "%";
        //console.log(num);
        $(".crousel img").animate({"left" : move},500);
        $(".crousel span").animate({"left" : move},500);
        $(this).addClass('a').siblings('li').removeClass('a');
    })

    //时间

})