$(function(){
    // 스크롤
    Init();
    $('.pane,.scrzone').mousewheel(function(event) {
        event.preventDefault();
        if($ScrollState==false){$ScrollState=true;if(event.deltaY < 0){UpdateScreen('+');}else if(event.deltaY > 0){UpdateScreen('-');}else{$ScrollState=false;}}
    });
    function Init(){
        $ScrollSpeed = 0.3; 
        $ScrollState=false; 
        $ActualSlide = $CibleSlide = $('.pane').first().attr('data-id');
        $ListSlides = new Array(); $('.pane').each(function(){ $ListSlides.push($(this).attr('data-id')); });
        TweenMax.to(window, 0, {scrollTo:0});
        TweenMax.to('.spane', 0, {scrollTo:{y:0, x:0}});
        $('.visible').removeClass('visible');
        $('#Helper').html("Init()");
    }
    function UpdateScreen(operator){
        $ActualSlide = $CibleSlide;
        if(operator=="+"){ 
            $CibleSlide = $ListSlides[$ListSlides.indexOf($ActualSlide)+1]; 
        }else{ 
            $CibleSlide = $ListSlides[$ListSlides.indexOf($ActualSlide)-1]; 
        }

        $('#Helper').html("From <strong>"+$ActualSlide+"</strong> to <strong>"+$CibleSlide+"</strong>");
        if(!$CibleSlide){ $ScrollState=false; $('#Helper').html("Break");$CibleSlide = $ActualSlide; return; }
        $ActualSlideDOM = $('.pane[data-id='+$ActualSlide+']');
        $CibleSlideDOM = $('.pane[data-id='+$CibleSlide+']');
    
        if( $ActualSlideDOM.closest('.prt').find('.spane').length && (operator=="+" && $ActualSlideDOM.next('.pane').length  ||  operator=="-" && $ActualSlideDOM.prev('.pane').length ) ){
            TweenMax.to($ActualSlideDOM.closest('.spane'), $ScrollSpeed, {scrollTo:'.pane[data-id='+$CibleSlide+']',ease: Power2.easeOut,onComplete:function(){$ScrollState=false; $CibleSlideDOM.addClass('visible');}});
        }else{
            TweenMax.to(window, $ScrollSpeed, {scrollTo:'.pane[data-id='+$CibleSlide+']',ease: Power2.easeOut,onComplete:function(){$ScrollState=false; $CibleSlideDOM.addClass('visible');}});
        }
    }
    //Init() On Resize
    $(window).resize(function(){
        Init();
    });

    $("#img_popup").click(function(){
        $(".modal_popup").addClass('show')
        $("#page-top").addClass('scrollLock')
    });
    $(".modal_btn").click(function(){
        $(".modal_popup").removeClass('show')
    });

    
    // 네브
    $('.nav-toggle').click(function() {
		$('.yinner').toggleClass('yopen');
	});

    $('.nav-link').click(function() {
		$('.yinner').toggleClass('yopen');
	});
    

    // 탑버튼
    var btn = $("#back-top");
    $(window).scroll(function () {
        $(this).scrollTop() > 100 ? btn.fadeIn() : btn.fadeOut();
    });
    btn.click(function () {
        $("body,html").animate({
            scrollTop: 0
            }, 1000);
        $(".rocket").addClass("fly");
        setTimeout(function () {
            $(".rocket").removeClass("fly");
        }, 1000);
        return false;
    });


    // 나머지 타이틀
    var animatedText = document.querySelectorAll(".animated-text");

    function animate(element){
    var textArray = element.innerText.split("");
    element.firstChild.remove();
    
    var elArray = textArray.map(
        (letter,index)=>{
        if(letter==" ") letter = '&nbsp;';
        var el = document.createElement("span");
        el.className = "letter";
        el.innerHTML = letter;
        el.style.animationDelay = index/(textArray.length)+"s";
        element.appendChild(el);
        return el;
        }
    );
    element.innerHtml = elArray;
    }
    Array.from(animatedText).map(animate)
});



