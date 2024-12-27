const apiKey = "84f5eecafc7f138f8a5cfad0369f289e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    if(response.status == 404){
        window.alert("Please Enter the city name correctly")
    }else{

    console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
    } else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    } else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
    } else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
    } else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    } 


}
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

