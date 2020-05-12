$(document).ready(function () {

    const navSLide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-lists');

        burger.addEventListener('click',() =>{
            nav.classList.toggle('nav-activate');
        });
    }

    navSLide();
    // burg menu animation
    // $('.menu-toggler').on('click', function(){
    //     $(this).toggleClass('open');
    //     $('.top-nav').toggleClass('open');
    // });

        // will close the link when you click list nav
    // $('.top-nav .nav-link').on('click', function(){
    //     $('.menu-toggler').removeClass('open');
    //     $('.top-nav').removeClass('open');
    // });
    //when you click any nav it will go to the page
    $('nav a[href*="#"]').on('click', function(){
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top-100
        },2000);
    });

    $('#up').on('click', function(){
        $('html, body').animate({scrollTop: 0}, 2000);
    });



    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    
        var currentScrollpos = window.pageYOffset;
        if(prevScrollpos > currentScrollpos) {
            document.getElementById("nav-lists").style.top = "0";
            document.getElementById("nav-lists").style.background="#0a192f";
            
        }else{
            document.getElementById("nav-lists").style.top = "-200px";
            
        }
        prevScrollpos = currentScrollpos;
    }

//  start ---Simple parallax-----------//
    var image = document.getElementsByClassName('ione');
        new simpleParallax(image, {
            scale: 1.6,
            orientation: 'left'
        });

        var image = document.getElementsByClassName('parallax');
        new simpleParallax(image, {
            scale: 1.6,
            
        });

        


//  end ---Simple parallax-----------//



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


    
    
    $(function(){
        setTimeout(function(){
        $('html, body')
        .main({
            'overflow': 'auto'
        })
          .animate({
            scrollTop: $('.temp').offset().top
          }, 2000);
        }, 2000);
      });

      new WOW().init();





});




