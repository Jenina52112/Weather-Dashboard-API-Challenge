
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
var historyList = document.getElementById('historyList');
var iconElement = document.getElementById('iconEl');
var icon1 = document.getElementById('icon1');
var apiKey = "1b13cd363449193c96068b99f99b527b"
var cityname = document.getElementById('userInput').value;
var today = dayjs()


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
    var temperature = data.main.temp;
    tempText.textContent = 'Temperature: ' + temperature + ' °F'
    windText.textContent = 'Wind: ' + data.wind.speed + ' MPH'
    humidText.textContent = 'Humidity: ' + data.main.humidity + ' %'

    iconElement.textContent = ''
    iconEl = data.weather[0].icon;
    iconUrl = 'https://openweathermap.org/img/wn/' + iconEl + '.png'
    imageEl = document.createElement('img')
    imageEl.src = iconUrl
    iconElement.appendChild(imageEl)
  })
 
  date.textContent = dayjs().format('  (' + 'MM' + '/' + 'D' + '/' + 'YYYY' + ')')
  day1Text = today.add(1, 'day').format('MM' + '/' + 'D' + '/' + 'YYYY');
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
  nextD = today.add([i], 'day').format('YYYY' + '-' + 'MM' + '-' + 'DD')
    
  samedayArray = result.list.filter(list => list.dt_txt.startsWith(nextD))
  daysArray.push(samedayArray)

}
day1 = daysArray[0]
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
console.log(day4)

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

iconEl1 = day1[0].weather[0].icon;
iconUrl1 = 'https://openweathermap.org/img/wn/' + iconEl1 + '.png'
document.getElementById('icon1').src = iconUrl1
iconEl2 = day2[0].weather[0].icon;
iconUrl2 = 'https://openweathermap.org/img/wn/' + iconEl2 + '.png'
document.getElementById('icon2').src = iconUrl2
iconEl3 = day3[0].weather[0].icon;
iconUrl3 = 'https://openweathermap.org/img/wn/' + iconEl3 + '.png'
document.getElementById('icon3').src = iconUrl3
iconEl4 = day4[0].weather[0].icon;
iconUrl4 = 'https://openweathermap.org/img/wn/' + iconEl4 + '.png'
document.getElementById('icon4').src = iconUrl4
iconEl5 = day5[0].weather[0].icon;
iconUrl5 = 'https://openweathermap.org/img/wn/' + iconEl5 + '.png'
document.getElementById('icon5').src = iconUrl5

day1Div.textContent = day1Text + '\nTemp: ' + maxTemp1 + ' °F' + '\n Wind: ' + maxWind1 + " MPH" + '\n Humidity: ' + maxhumid1 + " %";
day2Div.textContent = today.add(2, 'day').format('MM' + '/' + 'D' + '/' + 'YYYY') + "\n Temp: " + maxTemp2 + " °F" + "\n Wind: " + maxWind2 + " MPH" + "\n Humidity: " + maxhumid2 + " %";                     
day3Div.textContent = today.add(3, 'day').format('MM' + '/' + 'D' + '/' + 'YYYY') + "\n Temp: " + maxTemp3 + " °F" + "\n Wind: " + maxWind3 + " MPH" + "\n Humidity: " + maxhumid3 + " %";
day4Div.textContent = today.add(4, 'day').format('MM' + '/' + 'D' + '/' + 'YYYY') + "\n Temp: " + maxTemp4 + " °F" + "\n Wind: " + maxWind4 + " MPH" + "\n Humidity: " + maxhumid4 + " %";
day5Div.textContent = today.add(5, 'day').format('MM' + '/' + 'D' + '/' + 'YYYY') + "\n Temp: " + maxTemp5 + " °F" + "\n Wind: " + maxWind5 + " MPH" + "\n Humidity: " + maxhumid5 + " %";
}
)
}
 
var listOfCity = [];
var storedList = JSON.parse(localStorage.getItem('listOfCity'))
if(!storedList){
  storedList = [];
}

buttonEl.addEventListener('click', function(){
  fetchUrl()
  fetch5Day()
  storedList.push(cityname)
  localStorage.setItem('listOfCity', JSON.stringify(storedList))
  console.log(storedList)
  console.log(cityname)
  renderList()  
  city.textContent = cityname.toUpperCase()
}
)
 
function renderList(){
  historyList.innerHTML ="";
  for (var i=0; i<storedList.length; i++ ) {
    var listObj = storedList[i];
    liEl = document.createElement('li')
    liEl.classList.add('liClass');
    liEl.textContent = listObj.toUpperCase()
    historyList.appendChild(liEl);

    liEl.addEventListener("click", function(event){
      date.textContent = dayjs().format('  (' + 'MM' + '/' + 'D' + '/' + 'YYYY' + ')')
      day1Text = today.add(1, 'day').format('MM' + '/' + 'D' + '/' + 'YYYY');
      newCity = event.target.textContent
      console.log(newCity)
      var apiKey = "1b13cd363449193c96068b99f99b527b"
      cityname = newCity;
      var url  = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityname + '&appid=' + apiKey + '&units=imperial';
      fetch(url)
        .then(response => {
          if (!response.ok) {
          throw new Error('Network response was not ok');
          }
          return response.json();
        }
        )
        .then(data => {
          city.textContent = cityname.toUpperCase()
          var temperature = data.main.temp;
          tempText.textContent = 'Temperature: ' + temperature + ' °F'
          windText.textContent = 'Wind: ' + data.wind.speed + ' MPH'
          humidText.textContent = 'Humidity: ' + data.main.humidity + ' %'
          iconElement.textContent = ''
          iconEl = data.weather[0].icon;
          iconUrl = 'https://openweathermap.org/img/wn/' + iconEl + '.png'
          imageEl = document.createElement('img')
          imageEl.src = iconUrl
          iconElement.appendChild(imageEl)
        }
        )
      
var fivedayUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityname + '&appid=' + apiKey + '&units=imperial';

fetch(fivedayUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
      return response.json();
  }
  )
  .then(result => {
    daysArray = []
      for (var i = 1; i <= 5; i++){
        nextD = today.add([i], 'day').format('YYYY' + '-' + 'MM' + '-' + 'DD')
        samedayArray = result.list.filter(list => list.dt_txt.startsWith(nextD))
        daysArray.push(samedayArray)
      }
    day1 = daysArray[0]
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
  

  iconEl1 = day1[0].weather[0].icon;
  iconUrl1 = 'https://openweathermap.org/img/wn/' + iconEl1 + '.png'
  document.getElementById('icon1').src = iconUrl1
  iconEl2 = day2[0].weather[0].icon;
  iconUrl2 = 'https://openweathermap.org/img/wn/' + iconEl2 + '.png'
  document.getElementById('icon2').src = iconUrl2
  iconEl3 = day3[0].weather[0].icon;
  iconUrl3 = 'https://openweathermap.org/img/wn/' + iconEl3 + '.png'
  document.getElementById('icon3').src = iconUrl3
  iconEl4 = day4[0].weather[0].icon;
  iconUrl4 = 'https://openweathermap.org/img/wn/' + iconEl4 + '.png'
  document.getElementById('icon4').src = iconUrl4
  iconEl5 = day5[0].weather[0].icon;
  iconUrl5 = 'https://openweathermap.org/img/wn/' + iconEl5 + '.png'
  document.getElementById('icon5').src = iconUrl5
  
  day1Div.textContent = day1Text + '\nTemp: ' + maxTemp1 + ' °F' + '\n Wind: ' + maxWind1 + " MPH" + '\n Humidity: ' + maxhumid1 + " %";
  day2Div.textContent = today.add(2, 'day').format('MM' + '/' + 'D' + '/' + 'YYYY') + "\n Temp: " + maxTemp2 + " °F" + "\n Wind: " + maxWind2 + " MPH" + "\n Humidity: " + maxhumid2 + " %";                     
  day3Div.textContent = today.add(3, 'day').format('MM' + '/' + 'D' + '/' + 'YYYY') + "\n Temp: " + maxTemp3 + " °F" + "\n Wind: " + maxWind3 + " MPH" + "\n Humidity: " + maxhumid3 + " %";
  day4Div.textContent = today.add(4, 'day').format('MM' + '/' + 'D' + '/' + 'YYYY') + "\n Temp: " + maxTemp4 + " °F" + "\n Wind: " + maxWind4 + " MPH" + "\n Humidity: " + maxhumid4 + " %";
  day5Div.textContent = today.add(5, 'day').format('MM' + '/' + 'D' + '/' + 'YYYY') + "\n Temp: " + maxTemp5 + " °F" + "\n Wind: " + maxWind5 + " MPH" + "\n Humidity: " + maxhumid5 + " %";
  }
  )
  })
}
}
renderList()
