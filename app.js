navigator.geolocation.getCurrentPosition((location) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=76e3c1d886170da31d1deefbe95b2935&units=metric`)

        .then((res) => res.json())
        .then((res) => {
            let container = document.getElementById("container");
            container.innerHTML = `
            <div class="styling">
            <div class="card" style="width: 22rem;">
            <div class="card-body" id="card">
              <h5 class="card-title">Weather App</h5>
              <input type="search" id="serach" placeholder="Search City"><button id="serach-icon" onclick="changrCity()">🔍</button>
              <h1>${res.name}</h1>
              <h2>${res.sys.country}</h2>
              <div class="display">
              <div class="img-type">
              <img id="pic" src="images/clear-day.svg" alt="images">
              </div>
              <div class="temp">
              <p>${Math.round(res.main.temp)}°C</p>
              </div>
              </div>
              <div class="weather-type"> 
              <p>${res.weather[0].main}</p>
              </div>
              <div class="style">
              <p id="p">Humidity: ${res.main.humidity}%</p>  
              <p>Wind Speed: ${res.wind.speed} km/h</p>
              </div>
              <div class="style-2">
              <p>Clouds: ${res.clouds.all}%</p>
              <p id="feels">Feels Like: ${Math.round(res.main.feels_like)}°</p>
              </div>
              
            </div>
            </div>
            </div>
            `
            if(res.weather[0].main == "Clear day"){
                document.getElementById("pic").src ="images/clear-day.svg"
            }
            else if(res.weather[0].main == "Clouds"){
                document.getElementById("pic").src = "images/clouds.png"
                document.getElementById("card").style.backgroundColor= "White";
            }
            else if(res.weather[0].main == "Cloudy"){
                document.getElementById("pic").src = "images/cloudy.svg"
            }
            else if(res.weather[0].main == "Drizzle"){
                document.getElementById("pic").src = "images/drizzle.svg"
            }
            else if(res.weather[0].main == "Dust"){
                document.getElementById("pic").src = "images/dust.svg"
            }
            else if(res.weather[0].main == "Fog"){
                document.getElementById("pic").src = "images/fog.svg"
            }
            else if(res.weather[0].main == "Haze"){
                document.getElementById("pic").src = "images/haze.svg"
            }
            else if(res.weather[0].main == "Mist"){
                document.getElementById("pic").src = "images/mist.svg"
            }
            else if(res.weather[0].main == "Rain"){
                document.getElementById("pic").src = "images/rainy-1.svg"
            }
            else if(res.weather[0].main == "Smoke"){
                document.getElementById("pic").src = "images/smoke.svg"
            }
            else if(res.weather[0].main == "Snow"){
                document.getElementById("pic").src = "images/snow.svg"
            }
            else if(res.weather[0].main == "Thunderstorm"){
                document.getElementById("pic").src = "images/thunderstorms.svg"
            }
            else if(res.weather[0].main == "Tornado"){
                document.getElementById("pic").src = "images/tornado.svg"
            }
            else if(res.weather[0].main == "Partly cloudy"){
                document.getElementById("pic").src = "images/partly cloudy.png"
            }

        })

      .catch((rej) => {
            console.log(rej)
        })
})

function changrCity(){
    let weather = document.getElementById("serach").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=76e3c1d886170da31d1deefbe95b2935&units=metric`)
    .then((res) => res.json())
    .then((res) =>{
         container.innerHTML = `
            <div class="styling">
            <div class="card" style="width: 22rem;">
            <div class="card-body" id="card">
              <h5 class="card-title">Weather App</h5>
              <input type="search" id="serach" placeholder="Search City"><button id="serach-icon" onclick="changrCity()">🔍</button>
              <h1>${res.name}</h1>
              <h2>${res.sys.country}</h2>
              <div class="display">
              <div class="img-type">
              <img id="pic" src="images/clear-day.svg" alt="images">
              </div>
              <div class="temp">
              <p>${Math.round(res.main.temp)}°C</p>
              </div>
              </div>
              <div class="weather-type"> 
              <p>${res.weather[0].main}</p>
              </div>
              <div class="style">
              <p id="p">Humidity: ${res.main.humidity}%</p>  
              <p>Wind Speed: ${res.wind.speed} km/h</p>
              </div>
              <div class="style-2">
              <p>Clouds: ${res.clouds.all}%</p>
              <p id="feels">Feels Like: ${Math.round(res.main.feels_like)}°</p>
              </div>
              
            </div>
            </div>
            </div>
            `
             if(res.weather[0].main == "Clear"){
                document.getElementById("pic").src ="images/clear-day.svg"
                document.getElementById("card").style.backgroundColor= "#ffd480";
            }
            else if(res.weather[0].main == "Clouds"){
                document.getElementById("pic").src = "images/clouds.png"
                document.getElementById("card").style.backgroundColor= "#f7f8f3";
            }
            else if(res.weather[0].main == "Cloudy"){
                document.getElementById("pic").src = "images/cloudy.svg"
                document.getElementById("card").style.backgroundColor= "lightgrey";
            }
            else if(res.weather[0].main == "Drizzle"){
                document.getElementById("pic").src = "images/drizzle.svg"
                document.getElementById("card").style.backgroundColor= "#94acb6";
            }
            else if(res.weather[0].main == "Dust"){
                document.getElementById("pic").src = "images/dust.svg"
                document.getElementById("card").style.backgroundColor= "#e7d3b7";
            }
            else if(res.weather[0].main == "Fog"){
                document.getElementById("pic").src = "images/fog.svg"
                document.getElementById("card").style.backgroundColor= "#a0a0a0";
            }
            else if(res.weather[0].main == "Haze"){
                document.getElementById("pic").src = "images/haze.svg"
                document.getElementById("card").style.backgroundColor= "#d6d7d9";
            }
            else if(res.weather[0].main == "Mist"){
                document.getElementById("pic").src = "images/mist.svg"
                document.getElementById("card").style.backgroundColor= "#d6d7d9";
            }
            else if(res.weather[0].main == "Rain"){
                document.getElementById("pic").src = "images/rainy-1.svg"
                document.getElementById("card").style.backgroundColor= "lightblue";
            }
            else if(res.weather[0].main == "Smoke"){
                document.getElementById("pic").src = "images/smoke.svg"
                document.getElementById("card").style.backgroundColor= "lightgrey";
            }
            else if(res.weather[0].main == "Snowfall"){
                document.getElementById("pic").src = "images/snow.svg"
                document.getElementById("card").style.backgroundColor= "white";
            }
            else if(res.weather[0].main == "Thunderstorm"){
                document.getElementById("pic").src = "images/thunderstorms.svg"
                document.getElementById("card").style.backgroundColor= "lightblue";
            }
            else if(res.weather[0].main == "Tornado"){
                document.getElementById("pic").src = "images/tornado.svg"
                document.getElementById("card").style.backgroundColor= "grey";
            }
            else if(res.weather[0].main == "Partly cloudy"){
                document.getElementById("pic").src = "images/partly cloudy.png"
                document.getElementById("card").style.backgroundColor= "lightskyblue";
            }
            // weather.value="";
    })

    .catch((rej) => {
        console.log(rej)
        alert("City Not Found");
    })
}









