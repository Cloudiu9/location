function get_geo_position() {
	var geo = navigator.geolocation;
	geo.getCurrentPosition(on_success, on_error, geo_params);
  }
  
  function on_success(position) {
	const latlon = position.coords.latitude + "," + position.coords.longitude;
	const api_key = config.apiKey;
	const img_url = "https://maps.googleapis.com/maps/api/staticmap?center=" + latlon + "&zoom=14&size=400x300&key=" + api_key;
  
	document.getElementById("latitude").innerHTML = "Latitude = " + position.coords.latitude;
	document.getElementById("longitude").innerHTML = "Longitude = " + position.coords.longitude;
	document.getElementById("acc").innerHTML = "Accuracy = " + position.coords.accuracy;
	document.getElementById("altitude").innerHTML = "Altitude = " + position.coords.altitude;
	document.getElementById("map").innerHTML = "<img src='" + img_url + "'>";
  }
  
  function on_error(e) {
	console.error('Error getting geolocation:', e);
  
	document.getElementById("error-message").innerHTML = "Error getting geolocation: " + e.message;
  }
  
  var geo_params = {
	enableHighAccuracy: true,
	timeout: 1000,
	maximumAge: 0
  };
  
  get_geo_position();
  