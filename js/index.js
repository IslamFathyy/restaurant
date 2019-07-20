$(window).scroll(function () {
    var info = $(window).scrollTop();
    if (info > 700) {
        $(".move").css("display", "block")
    } else {
        $(".move").css("display", "none")
    }
})
$(".move").click(function () {
    $("body").animate({
        scrollTop: 0
    }, 1000)
})

/*---------------------------------------------------------------------*/

var header = document.getElementById('header'),
    nav = document.getElementById('navbar'),
    over = document.getElementById('overlay');

window.onscroll = function () {

    var x = $(window).scrollTop();
    if (x > 100) {
        nav.style.backgroundColor = "black";
    } else {
        nav.style.backgroundColor = "transparent";

    }
}

/*--------------------------------------------------------------*/

var x = document.getElementsByClassName('filters');
var all_btn = document.getElementById('all_btn');
var b_btn = document.getElementById('b_btn');
var l_btn = document.getElementById('l_btn');
var d_btn = document.getElementById('d_btn');
var r = document.getElementsByClassName('r');
setview("all")

function setview(c) {
    if (c == "all") {
        for (var i = 0; i < x.length; i++) {
            x[i].style.display = "block";
            all_btn.classList.add('active');
            l_btn.classList.remove('active');
            d_btn.classList.remove('active');
            b_btn.classList.remove('active');

        }
    } else if (c == "b") {
        for (var i = 0; i < x.length; i++) {
            x[i].style.display = "block";
            if (!x[i].classList.contains('break')) {
                x[i].style.display = "none";
                all_btn.classList.remove('active');
                l_btn.classList.remove('active');
                d_btn.classList.remove('active');
                b_btn.classList.add('active');
            }
        }
    } else if (c == "l") {
        for (var i = 0; i < x.length; i++) {
            x[i].style.display = "block";
            if (!x[i].classList.contains('launch')) {
                x[i].style.display = "none";
                all_btn.classList.remove('active');
                l_btn.classList.add('active');
                d_btn.classList.remove('active');
                b_btn.classList.remove('active');
            }
        }
    } else if (c == "d") {
        for (var i = 0; i < x.length; i++) {
            x[i].style.display = "block";
            if (!x[i].classList.contains('dinner')) {
                x[i].style.display = "none";
                all_btn.classList.remove('active');
                d_btn.classList.add('active');
                l_btn.classList.remove('active');
                b_btn.classList.remove('active');
            }
        }

    }


}

/*--------------------------------------------------------------------------------------------------*/



$(document).ready(function () {
    $("body").css("overflow", "hidden")
    $(".spinner").fadeOut(5000, function () {

        $(".loadingscreen").fadeOut(1000);
        $("body").css("overflow", "auto")
    });
})









/*---------------------------------------------------------------*/