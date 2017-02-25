$(function() {
	var mapOptions = {
		zoom: 5,
		center: new google.maps.LatLng(35.652832, 139.839478),
	 	panControl: false,
	 	panControlOptions: {
	 		position: google.maps.ControlPosition.BOTTOM_LEFT
	 	},
	 	zoomControl: true,
	 	zoomControlOptions: {
	 		style: google.maps.ZoomControlStyle.LARGE,
			position: google.maps.ControlPosition.RIGHT_CENTER
		},
	  scaleControl: false
	};

  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  var visibleMarkers = []

  var locations = [
  {lat: 35.6895, lng: 139.6917},
  {lat: 35.0116, lng: 135.7680},
  {lat: 38.2682, lng: 140.8694},
  {lat: 37.7503, lng: 140.4676},
  {lat: 31.9077, lng: 131.4202},
  {lat: 32.3898, lng: 130.7417},
  {lat: 32.7503, lng: 129.8777},
  {lat: 33.5904, lng: 130.4017}
  ]

	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var markers = locations.map(function(location, i) {
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length]
      });
  });

  var markerCluster = new MarkerClusterer(map, markers,
  {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});


  map.addListener('bounds_changed', function() {
    for (var i = 0; i < markers.length; i++) {
      if (map.getBounds().contains(markers[i].getPosition())) {
        temp = []
        if (_.findWhere(temp, markers[i]) == null) {
          temp.push(markers[i])
        }
        visibleMarkers = temp
      }
    }
  });
});

  
