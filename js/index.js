/**
 * Created by Cai on 2017/9/24.
 */
$(function () {
    var index = 0 ;
    var timer = null;

    //滚动鼠标
    $(window).on("mousewheel", function (event) {
        //clearTimeout(timer);
        //timer = setTimeout(function () {
            //向下滚动deltaY = -1
            index -= event.deltaY;

            //封锁边界
            if(index > $('.indicator li').length-1){
                index = $('.indicator li').length-1
            }
            else if(index < 0){
                index = 0;
            }

        changeDownNow(index);
        showPage(index);
        setTimeout(function () {
            enterPage(index);
        },20);
        //},500);


    })

    //点击指示器
    $('.indicator li').on("click", function () {
        index = $(this).index();
        showPage(index);
        setTimeout(function () {
            enterPage(index);
        },20);
    })

    //在第一页隐藏左边"立即下载"
    changeDownNow(index);
    function changeDownNow(index){
        if(index == 0){
            $(".down-now-left").hide();
        }else{
            $(".down-now-left").show();
        }
    }

    //显示对应屏幕和指示器
    function showPage(index){
        //指示器排他
        $('.indicator li').eq(index).addClass('current').siblings().removeClass('current');

        //显示对应页面
        $('section').eq(index).show().siblings('section').hide();
    }

    //处理落空类
    function enterPage(index){
        $('section').eq(index).removeClass('current').siblings('section').addClass('current');
    }

})