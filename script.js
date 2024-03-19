
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// // Expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// // Expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// // Expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-2));
// // Expected output: Array ["duck", "elephant"]

// console.log(animals.slice(2, -1));
// // Expected output: Array ["camel", "duck"]

// console.log(animals.slice());
// // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

var buttonEl = document.getElementById('btnEl');
var tempText = document.getElementById('temperature');
var windText = document.getElementById('wind');
var humidText = document.getElementById('humid');
var city = document.getElementById('cityName');
var date = document.getElementById('dateToday');
var apiKey = "1b13cd363449193c96068b99f99b527b"
cityname = document.getElementById('userInput').value;
// console.log(cityname)


date.textContent = dayjs().format('MM' + '/' + 'D' + '/' + 'YYYY')

function fetchUrl(){
var apiKey = "1b13cd363449193c96068b99f99b527b"
cityname = document.getElementById('userInput').value;
var url  = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityname + '&appid=' + apiKey + '&units=imperial';
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data)
    var temperature = data.main.temp;
    var description = data.weather[0].description;
    tempText.textContent = 'Temperature: ' + temperature + ' °F'
    windText.textContent = 'Wind: ' + data.wind.speed + ' MPH'
    humidText.textContent = 'Humidity: ' + data.main.humidity + ' %'
    //const location = data.name;
//     outputElement.innerHTML = `<p>Temperature in ${location}: ${temperature}°C</p>
//                                <p>Weather: ${description}</p>`;
// console.log(location)
  })

}

function fetch5Day(){
var cityName = document.getElementById('userInput').value;
var fiveUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + apiKey + '&units=imperial';
fetch(fiveUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(result => {
    console.log(result)
//     day1wind = Math.max(result.list[0].wind.speed, result.list[1].wind.speed, result.list[2].wind.speed, result.list[3].wind.speed, result.list[4].wind.speed)
// console.log(day1wind)
// day1temp = Math.max(result.list[0].main.temp, result.list[1].main.temp, result.list[2].main.temp, result.list[3].main.temp, result.list[4].main.temp)
// console.log(day1temp)
// day1humidity = Math.max(result.list[0].main.humidity, result.list[1].main.humidity, result.list[2].main.humidity, result.list[3].main.humidity, result.list[4].main.humidity)
// console.log(day1humidity)
console.log(result.list.length)


day1all = result.list.slice(0, 7)

console.log(day1all.length)
console.log(day1all)

function getTemp(){
temArray = []

 for (var i = 0; i < day1all.length; i++){
  perhr = [day1all[i].main.temp]
console.log(perhr)
 }

 joinA = temArray.join(perhr)
 console.log(joinA)
}

getTemp()


//  //this is the highest temp for day1
//  highestTemp1 = Math.max(temp1)
//  //console.log(highestTemp1)
//  highestWind1 = Math.max(wind1)
//  console.log(highestWind1)
// highesthumid1 = Math.max(humidity1)
// //console.log(highesthumid1)


day2all = result.list.slice(7, 15)
console.log(day2all)

for (var i = 0; i < 4; i++){
  day1array = []
  
  day1array = result.list[i].main.humidity
  
 
  
}
    // var temperature = data.main.temp;
    // var description = data.weather[0].description;
    // tempText.textContent = 'Temperature: ' + temperature + ' °F'
    // windText.textContent = 'Wind: ' + data.wind.speed + ' MPH'
    // humidText.textContent = 'Humidity: ' + data.main.humidity + ' %'
    //const location = data.name;
//     outputElement.innerHTML = `<p>Temperature in ${location}: ${temperature}°C</p>
//                                <p>Weather: ${description}</p>`;
// console.log(location)
  })
  
  .catch(error => {

    console.error('Error:', error);
  });

}



buttonEl.addEventListener('click', function(){
fetchUrl()
fetch5Day()
city.textContent = cityname

//lat = data.coord.lat
// console.log(lat)
})



//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}