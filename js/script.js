const apiKey = "";
const apiCountry = "https://countryflagsapi.com/png/";

const city_input = document.querySelector("#city_input");
const btn_search = document.querySelector("#search_btn");

const city_element = document.querySelector('#city');
const country_element = document.querySelector('#country-flag');
const description_element = document.querySelector('#description');
const wind_element = document.querySelector('#wind');
const umidity_element = document.querySelector('#umidity span');
const icon_element = document.querySelector('#weather-icon');
const temp_element = document.querySelector('#temperature');


// functions
getWeatherData = async (city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`
    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    console.log(data)
    return data;
}

showWeatherData = async (city) => {
    const data = await getWeatherData(city);

    city_element.innerText = data.name;
    temp_element.innerText = parseInt(data.main.temp) + "º";
    description_element.innerText = data.weather[0].description;
    icon_element.setAttribute("src",`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    country_element.setAttribute("src", apiCountry + data.sys.country);
    wind_element.innerText = parseInt(data.wind.speed) + "km/h";
    umidity_element.innerText = data.main.humidity + "%";
}
// events
btn_search.addEventListener("click", (e) => {
    e.preventDefault();

    const city = city_input.value;
    console.log(city);

    showWeatherData(city);
})