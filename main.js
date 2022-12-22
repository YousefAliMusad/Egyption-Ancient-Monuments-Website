let MenuIcon = document.querySelector(".menu")
let MenuIconSpan = document.querySelectorAll(".menu span")
let Header = document.querySelector("nav")
let HeaderLogo = document.querySelector("nav .logo")
let Time1 = document.querySelector(".time1");
let Time2 = document.querySelector(".time2");
let Time3 = document.querySelector(".time3");
let Time4 = document.querySelector(".time4");
let Time5 = document.querySelector(".time5");
let Time6 = document.querySelector(".time6");
let Time7 = document.querySelector(".time7");
let Time8 = document.querySelector(".time8");
let Time9 = document.querySelector(".time9");
let Lineprog = document.querySelector(".line-basic");
let Msg = document.querySelector(".r-text")
let OpenMsg = document.querySelector(".help-auto .open")
let CloseMsg = document.querySelector(".help-auto .close")

let TextMsg = document.querySelector(".help-auto .msg .text")

MenuIcon.onclick = function() {
    MenuIconSpan.forEach(e=> {
        e.classList.toggle("active")
    })
    document.body.classList.toggle("active")
}

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    Lineprog.style.width = scrolled + "%";
}


window.onscroll = function() {
    console.log(scrollY)
    if (scrollY <= 450) {
        TextMsg.innerHTML = `اهلا انا مساعدك الشخصي انا هنا عشان اعرفك علي الموقع استمر في التصفح`
    }
    if (scrollY >= 450) {
        TextMsg.innerHTML = "القسم دا بيوضح العصور الفرعونية لمصر القديمه بدأ امتي وانتهي امتي وقدامه صورة بتميز العصر "
    }
    if (scrollY >= 3170) {
        TextMsg.innerHTML = "هنا بقا القسم ده بيوريك اشهر الملوك الفراعنه علي مر العصر الفرعوني وعدد الملوك في القسم ده 20 ملك "
    }
    if (scrollY >= 6800) {
        TextMsg.innerHTML = "القسم دا بقا اهم قسم بيوريك اشهر الاثار الفرعونيه "
    }
    if (scrollY >= 15570) {
        TextMsg.innerHTML = "بس كده وشكرا علي المشاهده"
    }
    myFunction();
    if (scrollY >= 100) {
        Header.style.backgroundColor = "goldenrod";
    }
    else{
        Header.style.backgroundColor = "transparent";
    }
    if (innerWidth >= 1050 || innerWidth <= 1050) {
        if (scrollY >= 320) {
            Time1.style.cssText = " opacity:100%;" //"opicity:100%"
        }
        else{
            Time1.style.cssText = " opacity:0%" //"opicity:0%"
        }
    
        if (scrollY >= 600) {
            Time2.style.cssText = " opacity:100%;"
        }
        else{
            Time2.style.cssText = " opacity:0%"
        }
    
        if (scrollY >= 880) {
            Time3.style.cssText = " opacity:100%;"
        }
        else{
            Time3.style.cssText = " opacity:0%"
        }
    
        if (scrollY >= 1160) {
            Time4.style.cssText = " opacity:100%;"
        }
        else{
            Time4.style.cssText = " opacity:0%"
        }
    
        if (scrollY >= 1440) {
            Time5.style.cssText = " opacity:100%;"
        }
        else{
            Time5.style.cssText = " opacity:0%"
        }
    
        if (scrollY >= 1720) {
            Time6.style.cssText = " opacity:100%;"
        }
        else{
            Time6.style.cssText = " opacity:0%"
        }
    
        if (scrollY >= 2000) {
            Time7.style.cssText = " opacity:100%;"
        }
        else{
            Time7.style.cssText = " opacity:0%"
        }
    
        if (scrollY >= 2280) {
            Time8.style.cssText = " opacity:100%;"
        }
        else{
            Time8.style.cssText = " opacity:0%"
        }
    
        if (scrollY >= 2560) {
            Time9.style.cssText = " opacity:100%;"
        }
        else{
            Time9.style.cssText = " opacity:0%"
        }
    }
}

OpenMsg.onclick = function() {
    Msg.classList.toggle("active");
}

CloseMsg.onclick = function () {
    Msg.classList.remove("active");
}