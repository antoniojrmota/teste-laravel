$(document).ready(function () {
  var map;
  var geocoder;
  var marker;

  function initMap() {
    map = new google.maps.Map(document.getElementById("address-map"), {
      center: { lat: -15.8267, lng: -47.9218 },
      zoom: 8
    });
    geocoder = new google.maps.Geocoder();
  }
  $('.find-place').on('click', function () {
    var address = $('#inputCEP').val();
    geocodeAddress(address);
  });

  function geocodeAddress(address) {
    geocoder.geocode({ 'address': address }, function (results, status) {
      if (status === 'OK' && results && results.length > 0) {
        var location = results[0].geometry.location;
        map.setCenter(location);

        if (marker) {
          marker.setMap(null);
        }
        marker = new google.maps.Marker({
          map: map,
          position: location
        });

        $('#inputLat').val(location.lat());
        $('#inputLng').val(location.lng());

        fillAddressFields(results[0]);
      } else {
        alert('ERRO geocodeAddress: ' + status);
      }
    });
  }

  function fillAddressFields(result) {

    var addressComponents = result.address_components;

    $('#inputCEP').val('');
    $('#inputCity').val('');
    $('#inputSuburb').val('');
    $('#inputState').val('');
    $('#inputCountry').val('');

    function findComponentByType(componentType) {
      for (var i = 0; i < addressComponents.length; i++) {
        var component = addressComponents[i];
        if (component.types.includes(componentType)) {
          return component.long_name;
        }
      }
      return null;
    }

    $('#inputCEP').val(findComponentByType('postal_code'));
    $('#inputCity').val(findComponentByType('administrative_area_level_2'));
    $('#inputSuburb').val(findComponentByType('sublocality'));
    $('#inputStreet').val(findComponentByType('route'));
    $('#inputState').val(findComponentByType('administrative_area_level_1'));

    var countryName = findComponentByType('country');
    if (countryName) {
        $('#inputCountry option').each(function() {
            if ($(this).text().trim() === countryName) {
                $(this).prop('selected', true);
                return false;
            }
        });
    }
}
  initMap();
});