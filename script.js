// var url = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=1b13cd363449193c96068b99f99b527b"
var geo = "api.openweathermap.org/geo/1.0/direct?q={city}&limit=50&appid=1b13cd363449193c96068b99f99b527b"
var key = "1b13cd363449193c96068b99f99b527b"

lat = "";
lon = "";
city  = "Manteca"
fetch(geo)
.then((resp) => {
  if (!resp.ok) throw new Error('was not a valid response');
  return resp.json();
})
.then((data) => {
  //console.log(data);
//const result = data.data.filter((q) => q === 'CA');
  console.log(data);


//console.log(result);
})
.catch((err) => {
  console.warn(err.message);
});

