'use strict';
import slugify from 'slugify';

const Swal = require('sweetalert2');

var map;

class Assistance {
  constructor() {
    app.masks();
    app.initSelect2();
    this.my_location();
    this.map();
  }

  // Controla a localização do usuário
  my_location() {
    var self = this;

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

            var location = _getLocationFromPlace(results[0]);
            self.updateForm(location);

            $('#searchDirection').val('1');
            $('#myLocation').val('1');
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
  }

  //Controle google maps e eventos relacionados
  map() {
    let self = this;
    var markers = [];

    var infobox = new InfoBox({
      content: '',
      disableAutoPan: false,
      alignBottom: true,
      zIndex: null,
      boxClass: 'infoTrending',
      boxStyle: {
        width: 'auto',
        height: 'auto'
      },
      closeBoxMargin: '12px 12px 0px 0px',
      closeBoxURL: '',
      infoBoxClearance: new google.maps.Size(1, 1)
    });

    var bounds = new google.maps.LatLngBounds();

    var maxLat = Math.atan(Math.sinh(Math.PI)) * 180 / Math.PI;
    var mapCanvas = document.getElementById('gmaps'),
      myLatLng = new google.maps.LatLng(-17.8102224, -57.3129829),
      mapOptions = {
        center: myLatLng,
        zoom: 4,
        minZoom: 3,
        maxZoom: 17,
        scrollwheel: false,
        draggable: true,
        mapTypeControl: false,
        streetViewControl: false,
        keyboardShortcuts: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        restriction: {
          latLngBounds: { north: maxLat, south: -maxLat, west: -180, east: 180 },
          strictBounds: true
        },
      };

    map = new google.maps.Map(mapCanvas, mapOptions);
    map.set('styles', [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'off' }] }]);

    $('#maps .list-item').each((i, item) => {
      let gps = $(item).data('gps');

      if (gps) {
        var position = new google.maps.LatLng(gps.lat, gps.lng);
        var marker = new google.maps.Marker({
          id: i,
          position: position,
          icon: new google.maps.MarkerImage(
            base_url + '/assets/site/img/marker.png',
            new google.maps.Size(45, 45),
            new google.maps.Point(0, 0),
            new google.maps.Point(26, 56)
          ),
          map: map
        });

        bounds.extend(position);

        markers.push(marker);
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
          return function () {
            let company = $('#gps-' + i).data('company');
            var template = '<div class="infobox">...</div>';
            if ($('#gps-' + i).length)
              template = '<div class="infobox"><div class="infobox-data">' +
                '<div class="infobox-title">' + company.name + '</div>' +
                '<div class="infobox-address">' + company.full_address +
                // ((company.address_number && company.address_number != '-') ? ', ' + company.address_number : '') +
                // ((company.address_district && company.address_district != '-') ? ', ' + company.address_district : '') +
                // ((company.cep && company.cep != '-') ? ', ' + company.cep : '') +
                '</div>' +
                ((company.email && company.email != '-') ?
                  '<a class="infobox-contact" href="mailto:' + company.email + '"><i class="fas fa-envelope"></i><span>' + company.email + '</span></a>' : '') +
                ((company.phone && company.phone != '-') ?
                  '<a class="infobox-contact" href="tel:' + company.phone + '"><i class="fas fa-phone-alt"></i><span>' + company.phone + '</span></a>' : '') +
                '</div><div class="infobox-buttons"><a class="common-button" href="https://www.google.com/maps/search/?api=1&query=' + company.gps_latitude + ',' + company.gps_longitude + '" target="_blank"><i class="fas fa-map-marker-alt"></i><span>' + (i18n['on_the_map'] || 'Abrir Mapa') + '</span></a>' +
                '<a class="common-button dark-button" href="https://www.google.com/maps/dir/?api=1&destination=' + company.gps_latitude + ',' + company.gps_longitude + '" target="_blank"><i class="fas fa-route"></i><span>' + (i18n['trace_route'] || 'Traçar Rota') + '</span></a>' +
                '</div></div>';

            if (infobox)
              infobox.close();

            infobox.setContent(template);

            infobox.open(map, marker);
            $('.infoTrending').removeClass('show');

            setTimeout(function () {
              map.panTo(infobox.getPosition());
              map.panBy(0, -200);
              infobox.setOptions({ 'pixelOffset': new google.maps.Size((($('.infoTrending').width() / 2) * -1) - 4, -75) });
              $('.infoTrending').addClass('show');
            }, 10);

            setTimeout(() => {
              new google.maps.event.trigger(map, 'dragend');
            }, 200);
          };
        })(marker, i));
      } else {
        markers.push(null);
      }
    });

    // it's a king of a magic!!!
    $('.map .list-item:removeData(company)');
    $('.map .list-item:removeData(gps)');

    new MarkerClusterer(map, markers.filter(el => el), {
      maxZoom: 16,
      styles: [{
        url: base_url + '/assets/site/img/cluster.png',
        width: 30,
        height: 30,
        anchor: ['50%', '50%'],
        textColor: '#fff',
        textSize: 15
      }]
    });

    map.fitBounds(bounds);

    //-----LISTENERS E EVENTOS
    google.maps.event.addListener(map, 'click', function () {
      infobox.close();
    });

    // Mostra os cards dos quais tenham marker no mapa
    google.maps.event.addListener(map, 'dragend', function () {
      self.updateList(markers);
    });

    google.maps.event.addListener(map, 'zoom_changed', function () {
      setTimeout(() => {
        new google.maps.event.trigger(map, 'dragend');
      }, 200);
    });

    // Mostra infobox no click no card da lista
    $('.result-box .list .list-item').on('click', function () {
      infobox.close();
      if ($('.result-box .map-box:visible').length) {
        var id = $(this).data('id');
        if (markers[id]) {
          new google.maps.event.trigger(markers[id], 'click');
          map.setZoom(15);

          setTimeout(() => {
            new google.maps.event.trigger(map, 'dragend');
          }, 200);
        } else {
          Swal.fire('Oops!', i18n.no_geo, 'warning');
        }
      }
    });

    // Desativa a busca por autocomplete
    $('#searchPlaces').on('keyup', function () {
      $('#searchDirection').val('0');
      $('#myLocation').val('0');
    });

    //Auto complete places
    var autocomplete = new google.maps.places.Autocomplete(document.getElementById('searchPlaces'));

    //Quando escolhe um lugar na busca, atualiza country, state e city
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
      // Ativa a busca por autocomplete
      $('#searchDirection').val('1');
      $('#myLocation').val('0');
      var location = _getLocationFromPlace(autocomplete.getPlace());
      self.updateForm(location);
    });

    //Click no botão de search
    $('.map-form').on('submit', function (e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      infobox.close();

      let $form = $('.map-form'),
        $btn = $form.find('button span'),
        $btnIcon = $form.find('button .icon');

      $.ajax({
        url: $form.attr('action'),
        dataType: 'JSON',
        type: 'POST',
        data: $form.serialize(),
        beforeSend: () => {
          $btn.prop('disabled', true);
          $btnIcon.removeClass('fa-search').addClass('fa-spin fa-sync');
        },
        success: function (response) {
          $btn.prop('disabled', false);
          $btnIcon.removeClass('fa-spin fa-sync').addClass('fa-search');

          if (response.status) {
            if ($('.result-box .map-box:hidden').length)
              $('.view-box button:first-child').trigger('click');

            $('html,body').animate({
              scrollTop: $('#gmaps').offset().top - 30
            }, 1000);

            setTimeout(() => {
              var search_bounds = new google.maps.LatLngBounds();

              response.data.map((location) => {
                if (location.gps_latitude != null && location.gps_longitude != null) {
                  var position = new google.maps.LatLng(location.gps_latitude, location.gps_longitude);
                  search_bounds.extend(position);
                }
              });

              // Da um fit nos pontos encontrados
              map.fitBounds(search_bounds);

            }, 100);

          } else {
            Swal.fire('Oops!', response.message || 'Não foi possível executar esta ação', 'warning');
            // Se não encontrar nada, mostra todos
            map.fitBounds(bounds);
          }
        },
        error: function (response) {
          $btn.prop('disabled', false);
          $btnIcon.removeClass('fa-spin fa-sync').addClass('fa-search');
          console.error(response);
        }
      });
    });
  }

  updateList(markers) {
    var marker_ids = [];
    for (var i = markers.length, bounds = map.getBounds(); i--;) {
      if (markers[i] && bounds.contains(markers[i].getPosition())) {
        marker_ids.push(markers[i].id);
      }
    }

    // Se o item na lista está na viewport do mapa
    //TODO: Pode ser trocado por um ajax pegando pelos ids(marker_ids) e mostrar na listagem somente o que retornar
    $('.result-box .list .list-item').each(function () {
      if (marker_ids.includes($(this).data('id'))) {
        $(this).removeClass('hide');
      } else {
        $(this).addClass('hide');
      }
    });
  }

  updateForm(location) {
    $('#maps').find('[name=city]').val(location.city.long_name);
    $('#maps').find('[name=state]').val(location.state.long_name);
    $('#maps').find('[name=country]').val(slugify(location.country.long_name, { lower: true })).trigger('change');
  }
}

function _getLocationFromPlace(place) {
  var location = { country: false, state: false, city: false };

  for (let i = place.address_components.length - 1; i >= 0; i--) {
    if (place.address_components[i].types[0] == 'country') {
      location['country'] = place.address_components[i];
    }

    if (place.address_components[i].types[0] == 'administrative_area_level_1') {
      location['state'] = place.address_components[i];
    }

    if (place.address_components[i].types[0] == 'administrative_area_level_2') {
      location['city'] = place.address_components[i];
    }
  }

  return location;
}

$(function () {
  new Assistance();
});
