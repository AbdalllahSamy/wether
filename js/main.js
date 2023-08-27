let city = document.querySelector(".input-text");
let btn = document.querySelector(".input-button");
let items = document.querySelector(".row");
let dataCity = [];
async function fetchWether(url) {
    let res = await fetch(url);
    let data = await res.json()
    desplay(data);
}

function desplay(data) {
    items.innerHTML += `
    <div class="w-25">
        <div class="wether">
        <h2 class="text-capitalize city-name">${data.name}</h2>
        <h2 class="text-center heat">${data.main.temp}<sup>°c</sup></h2>
        <div class="icon">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0].icon}.svg" class="icon-img" alt="">
        </div>
        </div>
        </div>
        `
    }
    
    btn.addEventListener('click', () => {
        let flag = 0;
        let cityName = city.value;
        for (let i = 0; i < dataCity.length; i++) {
        if (cityName == dataCity[i]) {
            flag = 1;
            break;
        }
    }
    if (cityName != "" && flag == 0) {
        fetchWether(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`);
        dataCity.push(cityName);
        console.log(dataCity);
    }
})