// 选项卡
/*Demo案例：
    ——————————————————————————
     $(".tab1>.tab_menu>ul>li").tab({
        event:"hover",
        currut:"current",
        obj_content:".tab1>.tab_box>.tab_box_item"                    
     });
    ——————————————————————————
*/
;(function($){
    $.fn.tab=function(options){
        var defaults={
            event:"hover",
            currut:"current",
            obj_content:".tab1>.tab_box>.tab_box_item"
        }
        var options=$.extend(defaults,options);
        var obj=$(this);
            obj.bind(options.event,function(){
                $(this).addClass(options.currut).siblings().removeClass(options.currut);
                var _index=$(this).index();
                $(options.obj_content).eq(_index).show().siblings().hide();                 
            })
    }
})(jQuery);

// 弹出关闭层
function showDiv(id) {
    $("#TB_overlayBG").show();
    $("." + id).show();
}
function hideDiv(id) {
    $("#TB_overlayBG").css("display", "none");
    $("." + id).css("display", "none");
}
// 分享
function share_open(id) {
    $("#TB_overlayBG").show();
    $("." + id).show();
}
function share_close(id) {
    $("#TB_overlayBG").css("display", "none");
    $("." + id).css("display", "none");
}
 // 活动规则
function rules(obj1, obj2) {
    $("." + obj1).click(function() {
        $("#TB_overlayBG").show();
        $("." + obj2).show().animate({
            "bottom": "0px"
        },
        500);
        event.stopPropagation();
    })
    $(".close_btn1").click(function() {
        $("#TB_overlayBG").hide();
        $("." + obj2).animate({
            "bottom": "-300px"
        },
        500).hide(100);
        event.stopPropagation();
    })
}
