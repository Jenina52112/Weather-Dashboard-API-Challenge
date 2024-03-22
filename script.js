
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
// console.log(cityname)

var today = dayjs()
console.log(today)
date.textContent = dayjs().format('  (' + 'MM' + '/' + 'D' + '/' + 'YYYY' + ')')
day1Text = today.add(1, 'day').format('MM' + '/' + 'D' + '/' + 'YYYY');








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

  //   //this logs all 40 lists
  //   console.log(result)
nextD = today.add(1, 'day').format('YYYY' + '-' + 'MM' + '-' + 'D')
console.log(nextD)
sameday1 = result.list.filter(list => list.dt_txt.startsWith(nextD))
console.log(sameday1)
temp1 = result.list.filter(list => list.main.temp)

nextD2 = today.add(2, 'day').format('YYYY' + '-' + 'MM' + '-' + 'D')
console.log(nextD2)
sameday2 = result.list.filter(list => list.dt_txt.startsWith(nextD2))
console.log(sameday2)

nextD3 = today.add(3, 'day').format('YYYY' + '-' + 'MM' + '-' + 'D')
console.log(nextD3)
sameday3 = result.list.filter(list => list.dt_txt.startsWith(nextD3))
console.log(sameday3)

nextD4 = today.add(4, 'day').format('YYYY' + '-' + 'MM' + '-' + 'D')
console.log(nextD4)
sameday4 = result.list.filter(list => list.dt_txt.startsWith(nextD4))
console.log(sameday4)

nextD5 = today.add(5, 'day').format('YYYY' + '-' + 'MM' + '-' + 'D')
console.log(nextD5)
sameday5 = result.list.filter(list => list.dt_txt.startsWith(nextD5))
console.log(sameday5)

var temp1 = [sameday1[0].main.temp]
var wind1 = [sameday1[0].wind.speed]
var humid1 = [sameday1[0].main.humidity]
for (var i = 1; i < sameday1.length; i++){
  temp1.push(sameday1[i].main.temp)
  wind1.push(sameday1[i].wind.speed)
  humid1.push(sameday1[i].main.humidity)
}
maxTemp1 = Math.max(...temp1)
maxWind1 = Math.max(...wind1)
maxhumid1 = Math.max(...humid1)

var temp2 = [sameday2[0].main.temp]
var wind2 = [sameday2[0].wind.speed]
var humid2 = [sameday2[0].main.humidity]
for (var i = 1; i < sameday2.length; i++){
  temp2.push(sameday2[i].main.temp)
  wind2.push(sameday2[i].wind.speed)
  humid2.push(sameday2[i].main.humidity)
}
maxTemp2 = Math.max(...temp2)
maxWind2 = Math.max(...wind2)
maxhumid2 = Math.max(...humid2)

var temp3 = [sameday3[0].main.temp]
var wind3 = [sameday3[0].wind.speed]
var humid3 = [sameday3[0].main.humidity]
for (var i = 1; i < sameday3.length; i++){
  temp3.push(sameday3[i].main.temp)
  wind3.push(sameday3[i].wind.speed)
  humid3.push(sameday3[i].main.humidity)
}
maxTemp3 = Math.max(...temp3)
maxWind3 = Math.max(...wind3)
maxhumid3 = Math.max(...humid3)

var temp4 = [sameday4[0].main.temp]
var wind4 = [sameday4[0].wind.speed]
var humid4 = [sameday4[0].main.humidity]
for (var i = 1; i < sameday4.length; i++){
  temp4.push(sameday4[i].main.temp)
  wind4.push(sameday4[i].wind.speed)
  humid4.push(sameday4[i].main.humidity)
}
maxTemp4 = Math.max(...temp4)
maxWind4 = Math.max(...wind4)
maxhumid4 = Math.max(...humid4)

var temp5 = [sameday5[0].main.temp]
var wind5 = [sameday5[0].wind.speed]
var humid5 = [sameday5[0].main.humidity]
for (var i = 1; i < sameday5.length; i++){
  temp5.push(sameday5[i].main.temp)
  wind5.push(sameday5[i].wind.speed)
  humid5.push(sameday5[i].main.humidity)
}
maxTemp5 = Math.max(...temp5)
maxWind5 = Math.max(...wind5)
maxhumid5 = Math.max(...humid5)

 
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