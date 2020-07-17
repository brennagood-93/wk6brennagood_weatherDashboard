// weather site api
const APIKey = "b34b10d91e5a9c17986d10c538c48645";
// open weather url
const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + $("#citySearch").val + "&appid=" + APIKey;
// uv index url
const uvURL = "https://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}"; 
// 5 additional days api
const fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid=";


// This is my button function, main function

$("button").on("click", function (event) {
    event.preventDefault();
    const cityResult = $("#citySearch").val();
    const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityResult + "&appid=" + APIKey;
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
    //   Variables for the weather details   
        const tempF = (response.main.temp - 273.15) * 1.80 + 32;
        const weatherDate = moment().format('L');
        const humidity = (response.main.humidity);
        const windSpeed = (response.wind.speed);
        const uvURL = "https://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + response.coord.lat + "&lon=" + response.coord.lon;
    //  Weather info displayed on screen   
        $("#weatherInfo").append("<p>" + response.name + "</p>");
        $("#weatherInfo").append("<p>" + weatherDate + "</p>");
        $("#weatherInfo").append("<p> Temperature: " + tempF.toFixed(1) + "</p>");
        $("#weatherInfo").append("<p> Humidity: " + humidity + "%" + "</p>");
        $("#weatherInfo").append("<p> Wind Speed: " + windSpeed + "MPH" + "</p>");
    //  UV section  
        $.ajax({
            url: uvURL,
            method: "GET"
        }).then(function (uvResponse) {
        
        const uvIndex = (uvResponse.value);
        $("#weatherInfo").append("<p> UV Index: " + uvIndex + "</p>");
         
        console.log(uvResponse);
        })
    // Five day section - Unable to make work
    const fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityResult + "&appid=" + APIKey;
    $.ajax({
        url: fiveDayURL,
        method: "GET"
    }).then(function (fiveDayResponse){
        for (let i = 2; i < 35; i+=8) {
         const fiveDayCard = $("<div>");
         const fiveDayIcon = $("<img>");
         fiveDayIcon.attr("src", "http://openweathermap.org/img/wn/" + fiveDayURL.list[i].weather[0].icon);

         fiveDayCard.append(fiveDayIcon);
         fiveDayCard.attr("class", "col");
         $("#fiveDays").append(fiveDayCard);
        }
        
        
        
        console.log(fiveDayResponse);
    })    
        
        
        
        
        
        
        
        console.log(tempF);
        console.log(response);
        


    })
    
});

