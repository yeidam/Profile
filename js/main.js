$(function(){
    // window.addEventListener("wheel", function(e){
    //     e.preventDefault();
    // },{passive : false});

    // });
    // 스크롤
    var $html = $("html");
    var page = 1;
    var lastPage = $(".content").length;
    
    $html.animate({scrollTop:0},11);
    $(window).on("wheel", function(e){
        if($html.is(":animated")) return;
        if(e.originalEvent.deltaY > 0){
            if(page== lastPage) return;
            page++;
        }else if(e.originalEvent.deltaY < 0){
            if(page == 1) return;
            page--;
        }
        var posTop = (page-1) * $(window).height();
        $html.animate({scrollTop : posTop});
    });

    // 네브
    $('.nav-toggle').click(function() {
		$('.yinner').toggleClass('yopen');
	});

    $('.nav-link').click(function() {
		$('.yinner').toggleClass('yopen');
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



