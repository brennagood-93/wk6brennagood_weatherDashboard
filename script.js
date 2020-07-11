// weather site api
const APIKey = "b34b10d91e5a9c17986d10c538c48645";
// open weather url
const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + $("#citySearch").val + "&appid=" + APIKey;
// uv index url
const uvURL = "http://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}";
// 5 additional days api
const fiveDayURL = "api.openweathermap.org/data/2.5/forecast?q={city name}&appid=";


$.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response){ 
    
console.log(queryURL);
console.log(response);
})