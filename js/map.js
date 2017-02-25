$(function() {
	
		var marketId = []; //returned from the API
		var allLatlng = []; //returned from the API
		var allMarkers = []; //returned from the API
		var marketName = []; //returned from the API
		var infowindow = null;
		var pos;
		var userCords;
		var tempMarkerHolder = [];

    var kyotoMarker = new google.maps.Marker({
      position: new google.maps.LatLng(35.0116, 135.7680),
      title: 'kyoto'
    });

    var naraMarker = new google.maps.Marker({
      position: new google.maps.LatLng(34.6851, 135.8050),
      title: 'nara'
    });


    var tokyoMarker = new google.maps.Marker({
      position: new google.maps.LatLng(35.6895, 139.6917),
      title: 'tokyo'
    });

    var kumamotoMarker = new google.maps.Marker({
      position: new google.maps.LatLng(32.7898, 130.7417),
      title: 'kumamoto'
    });

    var miyagiMarker = new google.maps.Marker({
      position: new google.maps.LatLng(38.2688, 140.8721),
      title: 'miyagi'
    });

    var okinawaMarker = new google.maps.Marker ({
      position: new google.maps.LatLng(26.2124, 127.6809),
      title: 'okinawa'
    });

		//Start geolocation
		
		if (navigator.geolocation) {    
		
			function error(err) {
				console.warn('ERROR(' + err.code + '): ' + err.message);
			}
			
			function success(pos){
				userCords = pos.coords;
				
				//return userCords;
			}
		
			// Get the user's current position
			navigator.geolocation.getCurrentPosition(success, error);
			//console.log(pos.latitude + " " + pos.longitude);
			} else {
				alert('Geolocation is not supported in your browser');
			}
		
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
	
	//Adding infowindow option
	infowindow = new google.maps.InfoWindow({
		content: "holding..."
	});
	
	//Fire up Google maps and place inside the map-canvas div
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


  //Pre-set markers
  tokyoMarker.setMap(map);
  kyotoMarker.setMap(map);
  naraMarker.setMap(map);
  miyagiMarker.setMap(map);
  kumamotoMarker.setMap(map);
  okinawaMarker.setMap(map);

});

