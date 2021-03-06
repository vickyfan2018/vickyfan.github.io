new WOW().init();
AOS.init();

function myFunction() {
    var x = document.getElementById("top-nav");
    var text=document.getElementById("text-menu");
    var cross=document.getElementById("delete");
    if (x.className === "nav-list") {
        x.className += " responsive";
        text.style.display= "none";
        cross.style.display= "block";
    } else {
        x.className = "nav-list";
        text.style.display= "block";
        cross.style.display= "none";
    }
}


if (matchMedia) {
  const mq = window.matchMedia("(max-width: 450px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {
    document.getElementById("logo").src = "image/123.png";
    document.getElementById("logo").width = "70";

  } else {
    document.getElementById("logo").src = "image/logo.png";
        document.getElementById("logo").width = "250";
  }

}

var swiper = new Swiper('.swiper-container', {
      slidesPerView: 5,
      spaceBetween: 50,
      loop: true,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
         dynamicBullets: true,
      },
      breakpoints: {
          2000: {
          slidesPerView: 3,
          spaceBetween: 70,
        },
         1500: {
          slidesPerView: 3,
          spaceBetween: 70,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 70,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 70,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        400: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        }
      }
    });


var openPhotoSwipe = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: './image/shrimp.png',
            w: 964,
            h: 1024
        }
    ];
    
    // define options (if needed)
    var options = {
       // history & focus options are disabled on CodePen        
        history: false,
        focus: false,

        showAnimationDuration: 0,
        hideAnimationDuration: 0
        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};



document.getElementById('btn').onclick = openPhotoSwipe;