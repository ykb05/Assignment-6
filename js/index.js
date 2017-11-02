

$( document ).ready(function() {


		// // var cities = ['NYC', 'SF', 'LA', 'ATX', 'SYD'];
  		var cityList = [];
  		var cityList = ['NYC', 'SF', 'LA', 'ATX', 'SYD'];

		for(var i=0; i < cityList.length; i++){
		$('#city-type').append($('<option></option>').val(cityList[i]).html(cityList[i]));
	}

//listen to the change of the select
$('#city-type').change(function(){
	
	//get value of user input

	var cityInput = $('#city-type').val();

	switch(cityInput){
	  //if user selects NYC, change the background of the page to class 'nyc'
	  case "NYC":
	    $('body').attr('class', 'nyc');
	    break;
	  //if user selects NYC, change the background of the page to class 'nyc'
	  case "LAX", "LA":
	    $('body').attr('class', 'la');
	    break;
	  //if user selects NYC, change the background of the page to class 'nyc'
	  case "SYD":
	    $('body').attr('class', 'sydney');
	    break;
	  //if user selects NYC, change the background of the page to class 'nyc'
	  case "SF":
	  	$('body').attr('class', 'sf');
	  	break;
	  //if user selects NYC, change the background of the page to class 'nyc'
	  case "ATX":
	  	$('body').attr('class', 'austin');
	  	break;

	  default:
	    $('body').removeClass();
  };
});
});

// get value of user's input
// store value into var city

	//   var city = $('#city-type').val().toLowerCase();

	 
	// 	if (city == "nyc" || city == "new york" || city == "new york city") {
	// 		$('body').attr('class', 'nyc');
	// 	}
	// 	// // if user submits "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
	// 	if (city == "san francisco" || city == "sf" || city == "bay area") {
	// 		$('body').attr('class','sf');
	// 	}
	// 	// // if use submits "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
	// 	if (city == "los angeles" || city == "la" || city == "lax") {
	// 		$('body').attr('class', 'la');
	// 	}
	// 	// // if user submits "Austin" or "ATX" make the background of the page austin.jpg
	// 	if (city == "austin" || city == "atx") {
	// 		$('body').addClass('austin');
	// 	}
	// 	// // if user submits "Sydney" or "SYD" make the background of the page sydney.jpg

	// 	if (city == "sydney" || city == "syd") {
	// 		$('body').addClass('sydney');
	// 	}
	// }

	// $('#city-type').val("");

// listen to click of submit button



