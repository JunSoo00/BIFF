/* press list 설정 */
$(function (){
    $(".press_link").on('click',()=>{
        $(".press_link_list").fadeIn()
    })
    $(".press_link_list").on('mouseleave',function(){
        $(this).fadeOut('fast')
    })

    //gnb 마우스 오버
    $(".gnb > li").on('mouseover', function () {
            // 마우스 들어갔을 때
            $(this).find(".subMenu").stop().fadeIn(300);
        }).on('mouseleave', function(){
            // 마우스 나갔을 때
            $(this).find(".subMenu").stop().fadeOut(300);
        });
})
