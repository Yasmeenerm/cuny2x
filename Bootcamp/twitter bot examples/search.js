console.log("testing to see if it is working");

//import twit package/module
var Twit = require('twit');

//refers to config file, so can use git ignore to avoid sharing access keys
var config = require('./config.js')

//creates a new instance of twit
var T = new Twit(config);

T.get('./search/tweets',{ q: '#saveYemen', count: 10},
  function(err,data,response){
    var tweets = data.statuses;
    for(var i = 0; i < tweets.length; i++){
      console.log(tweets[i].text)
    }
  })
