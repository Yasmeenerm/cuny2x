//request is an npm module we'll use to make our API calls
//it's a module that simplifies code nneded to make an http
//request in node
//request package
const request = require('request');

//yargs is an interactive command line interface tool
//it allows us to define variables from the command line
//yargs exposes any variables we use in the console onto the argv object
const argv = require('yargs').argv;

//creating string variables
let apiKey = '2d4ed85a0e1f0b4d743553ca8494dbc4';
//if no argument passed at command line for city, use default Brooklyn
let city = argv.c || 'Brooklyn';
// open weather map url
//two query params, city name & api key
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`



//we pass in URL & request returns a callback function with
//3 arguments : err, response & body
request(url, function (err, response, body){
//we check for an error in our request & log it
  if(err){
    console.log('error',err);
  }
  //if there is no error we log the entire contents of the
  //reponse body
  else{
    //JS object , allows us to access weather data within object with dot/bracket notation
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp}F°  degrees in ${weather.name}!`;
    let sunset = `Sunset at ${weather.sys.sunset}`;
    console.log(message, sunset);
  }
});
