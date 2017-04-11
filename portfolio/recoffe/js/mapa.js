function initialize() {
 
  // Map location;
  var myLatlng = new google.maps.LatLng(36.115285, -115.210730); // -------- coordinates
  var mapOptions = {
    zoom: 15,
    center: myLatlng,
    panControl: false,
    scrollwheel: false,
    // mapTypeId: google.maps.MapTypeId.ROADMAP
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  }
 
 
  // Information;
  var contentString = '<h3>Recoffee</h3>' +
  '<p>W Flamingo Rd Las Vegas, NV 89103, USA</p>';
  var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 700
  });
 
 
 
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
 
  // Custom map marker;
  var image = 'http://reativdesign.com/themes/recoffee/assets/images/pin.png';
  var marcadorPersonalizado = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: image,
      title: 'Recoffee',
      animation: google.maps.Animation.DROP
  });
 
 
  google.maps.event.addListener(marcadorPersonalizado, 'click', function() {
    infowindow.open(map,marcadorPersonalizado);
  });
 
 

  var styles = [
   
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },
    {
      featureType: "road",
      elementType: "labels"
    }
  ];
 
  var styledMap = new google.maps.StyledMapType(styles, {
    name: "Mapa Style"
  });
 

  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
 
}
 
 
function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyAnOv4ZMojx3P0sVmPqe-jsfBx89e-6CJc&sensor=false&callback=initialize";
  document.body.appendChild(script);
}
 
window.onload = loadScript;