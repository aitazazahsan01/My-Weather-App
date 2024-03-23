// API KEY & URL ==> I get this from openweatherapi.com (Google)
const apiKey = "15e1b9863aad39638a608addfdaafb56";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Initialiazing Variables
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

// Functon to Get Vlue from API Key

async function checkWeather(city){
    const reponse = await fetch(apiURL + city + `&appid=${apiKey}`);
    
    // Checking if city Enters is correct or not
    if(reponse.status == 404)
    {
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
    }

    else 
    {
        var data = await reponse.json();

    // Updating Data According to Entered Input
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/hr";

    // Updating Images as well
     if(data.weather[0].main == "Clouds")
     {
        weatherIcon.src = "images/clouds.png";
     }
     else if(data.weather[0].main == "Clear")
     {
        weatherIcon.src = "images/clear.png";
     }
     else if(data.weather[0].main == "Rain")
     {
        weatherIcon.src = "images/rain.png";
     }
     else if(data.weather[0].main == "Drizzle")
     {
        weatherIcon.src = "images/drizzle.png";
     }
     else if(data.weather[0].main == "Mist")
     {
        weatherIcon.src = "images/mist.png";
     }

     // On Searching Making creen to Display Info
     document.querySelector('.weather').style.display = "block";
     document.querySelector('.error').style.display = "none";
     document.querySelector('h5').style.display = "block";
     // Prinitng on Console
     console.log(data);
    
    }
}

// Event Listener for Button on Clicking
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
    searchBox.value = "";
});

