import Swiper, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Swal from 'sweetalert2';
import Aos from 'aos';
import 'aos/dist/aos.css';

class Home {
  constructor() {
    this.init();
    this.banner();
    this.my_location();
  }

  init() {
    $('.lazyload').lazyload();
    Aos.init({
      once: true,
    });

    new Swiper('.banner-swiper', {
      modules: [Navigation, Pagination, EffectFade],
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    new Swiper('.models-swiper', {
      modules: [Navigation, Pagination, EffectFade, Autoplay],
      slidesPerView: 1,
      centeredSlides: true,
      autoplay: true,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      on: {
        init: function () {
          const color = $('.models-swiper').find('.swiper-slide-active').data('color');
          const color2 = app.hexToRGB(color, -10);

          $('.gradient-overlay').css('background-image', 'linear-gradient(to bottom left, ' + color + ', ' + color2 + ')');
          $('.gradient-wrapper').css('background-image', 'linear-gradient(to bottom left, ' + color + ', ' + color2 + ')');
        },
        slideChangeTransitionEnd: function () {
          $('.lazyload').lazyload();

          if ($('.gradient-wrapper').hasClass('active')) {
            return false;
          }

          const color = $('.models-swiper').find('.swiper-slide-active').data('color');
          const color2 = app.hexToRGB(color, -10);

          $('.gradient-wrapper').css('background-image', 'linear-gradient(to bottom left, ' + color + ', ' + color2 + ')');
          $('.gradient-wrapper').addClass('active');
          $('.swiper-navigation').find('.swiper-button').addClass('swiper-button-disabled');

          setTimeout(function () {
            $('.gradient-overlay').css('background-image', 'linear-gradient(to bottom left, ' + color + ', ' + color2 + ')');
            $('.gradient-wrapper').removeClass('active');
            $('.swiper-navigation').find('.swiper-button').removeClass('swiper-button-disabled');
          }, 450);
        },
      }
    });

    new Swiper('.blog-swiper', {
      modules: [Autoplay, Pagination],
      slidesPerView: 1.2,
      autoplay: true,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      breakpoints: {
        960: {
          slidesPerView: 2.2,
          spaceBetween: 80,
        },
      }
    });

    new Swiper('.info-banners-swiper', {
      modules: [Autoplay, Pagination],
      autoplay: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        960: {
          slidesPerView: 1.1,
          spaceBetween: 20,
        },
      }
    });

    new Swiper('.instagram-swiper', {
      modules: [Autoplay],
      autoplay: true,
      slidesPerView: 1.5,
      breakpoints: {
        580: {
          slidesPerView: 2.5
        },
        960: {
          slidesPerView: 3.5
        },
        1250: {
          slidesPerView: 4.5
        },
      }
    });

    const breakpoint = window.matchMedia('(min-width: 961px)');
    let swiper3;

    const breakpointChecker = function () {
      if (breakpoint.matches === true) {
        if (swiper3 !== undefined) swiper3.destroy(true, true);
        return;
      } else if (breakpoint.matches === false) {
        swiper3 = new Swiper('.segments-swiper', {
          modules: [Autoplay],
          slidesPerView: 1.2,
          autoplay: true,
        });

        return swiper3;
      }
    };

    breakpoint.addEventListener('resize', breakpointChecker);
    breakpointChecker();
  }

  banner() {
    $(window).on('scroll', function () {
      let scroll = $(window).scrollTop();
      let $wrapper = $('#home').find('#banner .swiper');

      if (scroll >= 400 && !$wrapper.hasClass('shorter')) {
        $wrapper.addClass('shorter');
      } else if (scroll < 400 && $wrapper.hasClass('shorter')) {
        $wrapper.removeClass('shorter');
      }
    });
  }

  // Controla a localização do usuário
  // TODO: colocar isso no app e usar o mesmo script para todos
  my_location() {
    var successCallback = function (position) {
      var x = position.coords.latitude;
      var y = position.coords.longitude;
      displayLocation(x, y);
    };

    var errorCallback = function (error) {
      var errorMessage = 'Unknown error';
      switch (error.code) {
        case 1:
          errorMessage = 'Permission Denied';
          break;
        case 2:
          errorMessage = 'Position not available';
          break;
        case 3:
          errorMessage = 'Service not available. Try again later';
          break;
      }
      Swal.fire('Oops!', errorMessage, 'warning');
    };

    function displayLocation(latitude, longitude) {
      var geocoder = new google.maps.Geocoder();
      var latlng = new google.maps.LatLng(latitude, longitude);

      geocoder.geocode({ 'latLng': latlng }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          if (results[0]) {
            $('#searchPlaces').val(results[0].formatted_address);
          } else {
            Swal.fire('Oops!', 'Endereço não encontrado', 'warning');
          }
        } else {
          console.error('Geocoder failed due to: ' + status);
        }
      });
    }

    $('body').on('click', '.my-location', function (e) {
      e.preventDefault();
      e.stopImmediatePropagation();

      var options = {
        enableHighAccuracy: true,
        timeout: 1000,
        maximumAge: 0
      };
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
    });

    new google.maps.places.Autocomplete(document.getElementById('searchPlaces'));
  }
}

$(function () {
  window.home = new Home();
});
