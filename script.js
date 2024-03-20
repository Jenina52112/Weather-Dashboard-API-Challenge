
var buttonEl = document.getElementById('btnEl');
var tempText = document.getElementById('temperature');
var windText = document.getElementById('wind');
var humidText = document.getElementById('humid');
var city = document.getElementById('cityName');
var date = document.getElementById('dateToday');
var day1Div = document.getElementById('day1');
var day2Div = document.getElementById('day2');
var day3Div = document.getElementById('day3');
var day4Div = document.getElementById('day4');
var day5Div= document.getElementById('day5');

var apiKey = "1b13cd363449193c96068b99f99b527b"
cityname = document.getElementById('userInput').value;
// console.log(cityname)

var today = dayjs()
console.log(today)
date.textContent = dayjs().format('  (' + 'MM' + '/' + 'D' + '/' + 'YYYY' + ')')





day1Text = today.add(1, 'day').format('MM' + '/' + 'D' + '/' + 'YYYY');
day1Div.textContent = day1Text
day2Div.textContent = today.add(2, 'day').format('MM' + '/' + 'D' + '/' + 'YYYY');
day3Div.textContent = today.add(3, 'day').format('MM' + '/' + 'D' + '/' + 'YYYY');
day4Div.textContent = today.add(4, 'day').format('MM' + '/' + 'D' + '/' + 'YYYY');
day5Div.textContent = today.add(5, 'day').format('MM' + '/' + 'D' + '/' + 'YYYY');


const unixTimestamp = dayjs().unix();

console.log(unixTimestamp);




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

var day1Array = []

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
console.log(result.list.length)

list = result.list

nextD = today.add(1, 'day').format('YYYY' + '-' + 'MM' + '-' + 'D')
console.log(nextD)
for (var i = 0; i < list.length; i++){
sliceEl = list[i].dt_txt.slice(0,10)
console.log(sliceEl)



// first4 = 
  }



  }
  )
  }

  dateList = dayjs().format('YYYY' + '-' + 'MM' + '-' + 'D')
  console.log(dateList)


buttonEl.addEventListener('click', function(){
fetchUrl()
fetch5Day()
city.textContent = cityname.toUpperCase()

//lat = data.coord.lat
// console.log(lat)
})



//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}