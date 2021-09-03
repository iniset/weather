/**
 * TODO:
 * @ CITY WISE GET WEATHER INFORMATION
 * @ SHOW WEATHER IMAGE
 * @ SHOW CITY NAME
 * @ SHOW AVG TEMPERATURE
 * @ SHOW TEMPERATURE TYPE LIKE CLOUDS/RAIN ETC
 * @ SHOW FEEL LIKES TEMPERATURE
 * 
 */


  const getWeather = () => {
    const data = document.getElementById("search-field");
    spinnerToggle('block');
    fetchWeatherData(data.value);
    data.value = ''
    return false;
  }


  const spinnerToggle = handler => {
    document.getElementById("spinner").style.display = handler;
  }

  /**
   * TODO:
   * @param {Getting information using OneWeather API based on search data} data 
   */
  const fetchWeatherData = (data) => {

    const apiKey = "f24ed4a04ad1439c3e8eddc88eae11de";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then( response => response.json())
    .then( data => displayWeather(data))
    .catch(errors => {
      document.getElementById(
        "display-weather"
      ).innerHTML = `<div class="text-center weather-content"><h2>City not found</h2></div>`;
      spinnerToggle("none");
    })
  }
  

  /**
   * TODO:
   * @param {Display weather information using data } data 
   */
  const displayWeather = data => {

    let html = `<div class="text-center weather-content">
                  <img
                    src="http://openweathermap.org/img/w/${
                      data.weather[0].icon
                    }.png"
                    width="90px"
                  />
                  <h2>${data.name}</h2>
                  <h3>${Math.round(data.main.temp)} <sup>0</sup>C</h3>
                  <p class="feel-likes">Feel likes ${Math.round(
                    data.main.temp_max
                  )} <sup>0</sup>C</p>
                  <p>${data.weather[0].main}</p>
                </div>`;
    document.getElementById("display-weather").innerHTML = html;
    spinnerToggle("none");
    console.log(data);
  }
  