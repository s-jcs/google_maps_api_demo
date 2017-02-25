$(function() {

  console.log('foobar')

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

	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
});
