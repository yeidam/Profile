window.onload = function(){
    // 마우스
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");

    window.addEventListener("mousemove",function(e){
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // cursorOutline.style.left = `${posX}px`;
        // cursorOutline.style.top = `${posY}px`;
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // 리뉴얼 페이지
    var $cursor = $(".renewal_cursor"),
    $overlay = $(".project-overlay");

    function moveCircle(e) {
        TweenLite.to($cursor, 0.5, {
            css: {
            left: e.pageX,
            top: e.pageY
            },
            delay: 0.03
        });
    }

    $(".p-1").hover(function(){
        $(".renewal_cursor").css({ "background-image": "url(./img/yeidam/re_2.png)" });
    });

    $(".p-2").hover(function(){
        $(".renewal_cursor").css({ "background-image": "url(./img/yeidam/re_3.png)" });
    });
    $(".p-3").hover(function(){
        $(".renewal_cursor").css({ "background-image": "url(./img/yeidam/re_3.png)" });
    });
    $(".p-4").hover(function(){
        $(".renewal_cursor").css({ "background-image": "url(./img/yeidam/re_4.png)" });
    });

    var flag = false;
    $($overlay).mousemove(function() {
        flag = true;
        TweenLite.to($cursor, 0.3, {scale: 1, autoAlpha: 1});
        $($overlay).on("mousemove", moveCircle);
    });

    $($overlay).mouseout(function() {
        flag = false;
        TweenLite.to($cursor, 0.3, {scale: 0.1, autoAlpha: 0});
    });


}