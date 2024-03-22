# Weather-Dashboard-API-Challenge

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


for (var i = 1; i < sameday1.length; i++){
var temp1 = [sameday1[0].main.temp]
  temp1.push(sameday1[i].main.temp)
  console.log(temp1)
  
}

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



  //   //this logs all 40 lists
  //   console.log(result)
  //  console.log(result.list)
  //  sameday1Array = [result.list[0]]
  //   var array1 = [result.list[0].main.temp]
  //   console.log(array1)
  //   for(var i = 1; i < result.list.length; i++){
  //     //console.log(result.list[i])
  //    array1.push(result.list[i].main.temp)
  //   }
  //   console.log(array1)