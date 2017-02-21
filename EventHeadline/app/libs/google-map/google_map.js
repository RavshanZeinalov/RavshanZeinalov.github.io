
var google;
function init() {
    // Basic options for a simple Google Map
    var myLatlng = new google.maps.LatLng(59.327, 18.067);
    var mapOptions = {
        zoom: 16,
        center: myLatlng,
        scrollwheel: false,
        panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        styles: [{
          "featureType":"administrative.land_parcel",
          "elementType":"all",
          "stylers":[{"visibility":"off"}]},

          {"featureType":"landscape.man_made",
          "elementType":"all",
          "stylers":[{"visibility":"off"}]},

          //1
          {"featureType":"poi",
          "elementType":"all",
          "stylers":[{"visibility":"off"}]},

          //1
          {"featureType":"road",
          "elementType":"geometry.stroke",
          "stylers":[{"visibility":"off"}]},

          //1
          {"featureType":"road.highway",
          "elementType":"geometry.stroke",
          "stylers":[{visibility: "off"}]},


          //1
          {"featureType":"road.arterial",
          "elementType":"all",
          "stylers":[{"visibility":"off"}]},

          //1
          {"featureType":"road.local",
          "elementType":"geometry.stroke",
          "stylers":[{"visibility":"off"}]},


          {"featureType":"transit",
          "elementType":"all",
          "stylers":[{"visibility":"off"}]},

          {"featureType":"water",
          "elementType":"all",
          "stylers":[]}]
    };
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);    
    var addresses = ['Lviv'];

    for (var x = 0; x < addresses.length; x++) {
        $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address='+addresses[x]+'&sensor=false', null, function (data) {
            var p = data.results[0].geometry.location
            var latlng = new google.maps.LatLng(p.lat, p.lng);
            new google.maps.Marker({
                position: latlng,
                map: map
            });

        });
    }
    
}
google.maps.event.addDomListener(window, 'load', init);