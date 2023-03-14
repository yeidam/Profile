// var mHtml = $("html");
// var page = 1;

// mHtml.animate({scrollTop : 0},10);

// $(window).on("wheel", function(e) {
//     if(mHtml.is(":animated")) return;
//     if(e.originalEvent.deltaY > 0) {
//         if(page == 4) return;
//         page++;
//     } else if(e.originalEvent.deltaY < 0) {
//         if(page == 1) return;
//         page--;
//     }
//     var posTop =(page-1) * $(window).height();
//     mHtml.animate({scrollTop : posTop});
// })
$(function(){
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


    // 메뉴
    let menu = document.querySelector('#ytoggle');  
    let menuItems = document.querySelector('#yoverlay');  
    let menuContainer = document.querySelector('.ymenu-container');  
    let menuIcon = document.querySelector('i');  

    function toggleMenu(e) {
        menuItems.classList.toggle('yopen');
        menuContainer.classList.toggle('yfull-menu');
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.add('fa-times');
        e.preventDefault();
    }

    menu.addEventListener('click', toggleMenu, false);

});



