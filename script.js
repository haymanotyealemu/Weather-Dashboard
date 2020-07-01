
 //Set the API key
    var APIKey= "7530ba507c7637bcaa306e843e0a6954";
    // This .on("click") function will trigger the AJAX Call
    $(".btn").on("click",function(event){
        // event.preventDefault() can be used to prevent an event's default behavior.
        // Here, it prevents the search button from trying to submit a form when clicked
        event.preventDefault();
        //Grab text the user typed into the search input, 
        var city= $("#search-city").val().trim();
        // Here we construct our URL
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
        
        
        // Here we run our AJAX call to the OpenWeatherMap API
        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response){
            // Log the queryURL
            console.log(queryURL);
            // log the resulting object
            console.log(response);

        });

    });




