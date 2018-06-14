//this bot sends a hard-coded tweet to a user that follows account








//import twit package/module
var Twit = require('twit');

// Pulling all my twitter account info from another file
var config = require('./config.js');


//refers to config file, so can use git ignore to avoid sharing access keys
// var config = require('./config'):

//creates a new instance of twit
var T = new Twit(config);

//setting up a user stream
var stream = T.stream('user');





var stream = T.stream('statuses/filter', { track: 'save yemen' })

stream.on('tweet', function (tweet) {
  console.log(tweet)
})

/////////////////////////////////////////
//      What to post when followed     //
/////////////////////////////////////////

//anytime someone follows me
stream.on('follow',followed);
//
function followed(eventMsg) {
  console.log("follow event")
  var name = eventMsg.source.name;
  var screenName =eventMsg.source.screen_name;
  followed_post('@' + screenName +  ' Young Padawan, You have made a wise decision');
}

// // /////////////////////////////////////////
// // // Posting a an @ message to followerd //
// // /////////////////////////////////////////
//
function followed_post(txt) {
  var tweet = {
    status: txt
  }
  // post a Tweet
  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response) {
    console.log(data)
    if(err){
      console.log("something went wrong when posting");
    } else{
      console.log("it Posted!");
    }
  }
};

/////////////////////////////////////////
// Retweet                            //
/////////////////////////////////////////
// first parameter is tweet, second param is time interval in seconds
// every 20 seconds
setInterval (tweeting, 1000*20)

function tweeting(){
//   //1st param, what text you want to tweet
//   //2nd param, what tweet yo
  T.post('statuses/update', reTweeting, tweeted);
}

function tweeted(err, data, response) {
  if(err){
    console.log("something went wrong when posting");
  } else{
    console.log("it Posted!");
  }
}
tweeting();
//
//
function reTweeting(){
  //params for finding tweets
  var params = {
    q:'yoda',
    count : 1000
    result_type: 'recent',
    lang: 'en'
  }
  //what it's searching for
  T.get('search/tweets',params, tweeted);

  // function tweeted(err, data, response) {
  //   var i = Math.floor(Math.random()*100);
  //   var tweets = data.statuses;
  //   var tweet = tweets[i].text
  //   console.log(tweet);
  // }
  function retweeted(err, data, response) {
  if (err) {
    console.log("Error: " + err.message);
  } else {
    console.log('Retweeted: ' + tweet.id);
  }
}
}
