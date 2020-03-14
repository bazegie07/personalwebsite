$(document).ready(function () {

    // burg menu animation
    $('.menu-toggler').on('click', function(){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

        // will close the link when you click list nav
    $('.top-nav .nav-link').on('click', function(){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });
    //when you click any nav it will go to the page
    $('nav a[href*="#"]').on('click', function(){
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top-100
        },2000);
    });

    $('#up').on('click', function(){
        $('html, body').animate({scrollTop: 0}, 2000);
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        // animation only does once if you set once:true
        once: true
    });


    var i = 0;
    var txt = 'Web Developer & Photographer'; /* The text */
    var speed = 80; /* The speed/duration of the effect in milliseconds */
    
    function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    }

    typeWriter();




});


