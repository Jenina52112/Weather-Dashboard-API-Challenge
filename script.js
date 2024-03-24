
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
var day1C = document.getElementById('d1Content');
var day2C = document.getElementById('d2Content');
var day3C = document.getElementById('d3Content');
var day4C = document.getElementById('d4Content');
var day5C = document.getElementById('d5Content');
var apiKey = "1b13cd363449193c96068b99f99b527b"
cityname = document.getElementById('userInput').value;

var today = dayjs()
console.log(today)
date.textContent = dayjs().format('  (' + 'MM' + '/' + 'D' + '/' + 'YYYY' + ')')
day1Text = today.add(1, 'day').format('MM' + '/' + 'D' + '/' + 'YYYY');

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
  })

}

function fetch5Day(){
var cityName = document.getElementById('userInput').value;
var fivedayUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + apiKey + '&units=imperial';
fetch(fivedayUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(result => {


daysArray = []
for (var i = 1; i <= 5; i++){
    nextD = today.add([i], 'day').format('YYYY' + '-' + 'MM' + '-' + 'D')
    
console.log(nextD)
samedayArray = result.list.filter(list => list.dt_txt.startsWith(nextD))
console.log(samedayArray)
daysArray.push(samedayArray)

}
console.log(daysArray)
console.log(daysArray.length)
day1 = daysArray[0]
console.log(day1)
day2 = daysArray[1]
day3 = daysArray[2]
day4 = daysArray[3]
day5 = daysArray[4]


tempList1 = []; windList1 = []; humidList1 = [];
for (var i = 0; i < day1.length; i++){
  tempList1.push(day1[i].main.temp)
  windList1.push(day1[i].wind.speed)
  humidList1.push(day1[i].main.humidity)
}
maxTemp1 = Math.max(...tempList1)
maxWind1 = Math.max(...windList1)
maxhumid1 = Math.max(...humidList1)

tempList2 = []; windList2 = []; humidList2 = []
tempList3 = []; windList3 = []; humidList3 = []
tempList4 = []; windList4 = []; humidList4 = []
for (var i = 0; i < day2.length; i++){
  tempList2.push(day2[i].main.temp)
  windList2.push(day2[i].wind.speed)
  humidList2.push(day2[i].main.humidity)

  tempList3.push(day3[i].main.temp)
  windList3.push(day3[i].wind.speed)
  humidList3.push(day3[i].main.humidity)

  tempList4.push(day4[i].main.temp)
  windList4.push(day4[i].wind.speed)
  humidList4.push(day4[i].main.humidity)
}

maxTemp2 = Math.max(...tempList2)
maxWind2 = Math.max(...windList2)
maxhumid2 = Math.max(...humidList2)

maxTemp3 = Math.max(...tempList3)
maxWind3 = Math.max(...windList3)
maxhumid3 = Math.max(...humidList3)

maxTemp4= Math.max(...tempList4)
maxWind4 = Math.max(...windList4)
maxhumid4 = Math.max(...humidList4)

tempList5 = []; windList5 = []; humidList5 = []
for (var i = 0; i < day5.length; i++){
  tempList5.push(day5[i].main.temp)
  windList5.push(day5[i].wind.speed)
  humidList5.push(day5[i].main.humidity)
}
maxTemp5 = Math.max(...tempList5)
maxWind5 = Math.max(...windList5)
maxhumid5 = Math.max(...humidList5)

day1Div.textContent = day1Text + "\n \nTemp: " + maxTemp1 + " °F" + "\n Wind: " + maxWind1 + "\n Humidity: " + maxhumid1;
day2Div.textContent = today.add(2, 'day').format('MM' + '/' + 'D' + '/' + 'YYYY') + "\n Temp: " + maxTemp2 + " °F" + "\n Wind: " + maxWind2 + "\n Humidity: " + maxhumid2;                     
day3Div.textContent = today.add(3, 'day').format('MM' + '/' + 'D' + '/' + 'YYYY') + "\n Temp: " + maxTemp3 + " °F" + "\n Wind: " + maxWind3 + "\n Humidity: " + maxhumid3;
day4Div.textContent = today.add(4, 'day').format('MM' + '/' + 'D' + '/' + 'YYYY') + "\n Temp: " + maxTemp4 + " °F" + "\n Wind: " + maxWind4 + "\n Humidity: " + maxhumid4;
day5Div.textContent = today.add(5, 'day').format('MM' + '/' + 'D' + '/' + 'YYYY') + "\n Temp: " + maxTemp5 + " °F" + "\n Wind: " + maxWind5 + "\n Humidity: " + maxhumid5;
}
)
}


buttonEl.addEventListener('click', function(){
fetchUrl()
fetch5Day()
city.textContent = cityname.toUpperCase()

//lat = data.coord.lat
// console.log(lat)
})



//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}