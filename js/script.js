$(document).ready(function(){
  function isMobile() {
    return window.matchMedia("(max-width: 768px)").matches;
}
console.log('1');

document.querySelector('#nav .dropdown-btn').addEventListener('click', function () {
    let tg = this;
    if (!(tg.classList.contains('active'))) {
        tg.classList.add('active');
        document.querySelector('#nav .nav-dropdown').classList.add('on');
    } else {
        tg.classList.remove('active');
        document.querySelector('#nav .nav-dropdown').classList.remove('on');
    }
});
  
  $(".slider").slick( {
    autoplay: true,
    autoplaySpeed: 0,
    slidesToShow: 10,
    slidesToScroll: 1,
    speed:2000,
    cssEase:"linear",
    pauseOnFocus: true, 
    pauseOnHover: true,
    responsive: [
      // {
      //   breakpoint: 768,
      //   settings: {
      //     slidesToShow: 3,
      //   }
      // },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,                  
        }
      }
    ]
    

  } );
});