
let url;
let search = document.getElementById('search');
// let ul = document.querySelector('.flex-container');
let name = document.getElementById('name');
let main_temp = document.getElementById('main_temp');
let desc = document.getElementById('desc');
let sys = document.getElementById('sys');
let pressure = document.getElementById('pressure');
let humidity = document.getElementById('humidity');




search.addEventListener("keypress", event => {
    const input = document.querySelector('#search').value;

    url = "https://api.openweathermap.org/data/2.5/weather?q=" + input + "&APPID=58930770b946214d2479d8960c8ff302";

        if (event.keyCode === 13) {
           fetch(url)
               .then(res=>res.json())
               .then(data => {
                   console.log(data);
                   name.innerHTML = 'City: ' + data.name;
                   sys.innerHTML = 'Country Code: ' + data.sys.country;
                   main_temp.innerHTML = 'Temperature: ' + data.main.temp_min;
                   pressure.innerHTML = 'Pressure: ' + data.main.pressure;
                   humidity.innerHTML = 'Humidity: ' + data.main.humidity;
                   desc.innerHTML = 'Weather Desc: ' + data.weather[0].description;
               }
               )}
    });



