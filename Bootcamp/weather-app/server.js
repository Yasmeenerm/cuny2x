'use strict';
//api keys
const yelp = require('yelp-fusion');
const yelpApi ='_slGpAXrwcLt6nn1hd0EvmewIRVx1rHXneorT5ddGKCcG4ygNiyUEiu-xZymO8iZINwUyKGcmL9uB-bTfpZlEpYnrM2dZViRd5k7-nNiMBCoOoHJFRY0t7Sj8kIhW3Yx';

const apiKey = '2d4ed85a0e1f0b4d743553ca8494dbc4';
const token = 'L9q-GWumhvcrjCflUC0SWQ';
//create an instance named app
const express= require('express')
//by using this we cam make use of req.body object
const bodyParser = require('body-parser');
//request is an npm module we'll use to make our API calls
const request = require('request');
const app = express()


//allows access to all sttaic files in public folder
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended:true }));
app.set('view engine', 'ejs')
//specfically focusing on root URL (/)
//if we visit root URL, express will
//respond by rendering ejs file passed"
app.get('/', function (req, res){
  res.render('index', {weather: null, error: null, coffeeShop: null});
});
//////////////////////////////////////////
//                yelp                  //
//////////////////////////////////////////



// yelp.search("term=Biryani&location=New York")
//     .then(function(result){
//            res.json(result);
//         });
//

app.post('/', function(req, res){
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`

  request(url, function (err, response, body){
    if(err){
      res.render('index',{weather: null, error:'Error, please try again'});
    }
    else{
      let weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('index',{weather: null, error:'Error, please try again'});
      }
      else{
        let weatherText = `It's ${weather.main.temp} F° in ${weather.name}`;

        const searchRequest = {
          term: 'coffee',
          location: city }

        const client = yelp.client(yelpApi);
        let coffeeText= null;
        client.search(searchRequest).then(response => {
          // console.log("searchRequest: ",searchRequest);
          // console.log("search response: ",response);

          var i = Math.floor(Math.random()*10);
          console.log(i, "random var");
          const result = response.jsonBody.businesses[i];
          console.log("result: ",result);
          console.log("result specific location", `${result.name}`);

          // const coffee = JSON.stringify(result, null, 4);
          // console.log("coffee: ", coffee);

          coffeeText= `Check out this sweet coffee shop too while you're in the hood ${result.name} @ ${result.location.address1} ${result.image_url}`;
          console.log("CF", coffeeText);
          res.render('index', {weather: weatherText, error: null, coffeeShop: coffeeText});

        }).catch(e => {
          console.log(e, "error in yelp search");
      });
      console.log("CF down here", coffeeText);

      //coffee: coffeeText,

       }
    }
  });
})



app.listen(3000, function(){
  console.log('Check out port 3000!')
})
