//This bot tweets specific text to any user that follows bot
//retweets posts with keywords


//import twit package/module
var Twit = require('twit');

// Pulling all my twitter account info from another file
var config = require('./config.js');


//refers to config file, so can use git ignore to avoid sharing access keys
// var config = require('./config'):

//creates a new instance of twit
var T = new Twit(config);

// Setting up a user stream
var stream = T.stream('user');
//////////////////////////////////////////////////////////////////////////////
//    FOLLOWING EVENT                                                       //
//////////////////////////////////////////////////////////////////////////////

// anytime someone follows me
stream.on('follow',followed);

function followed(eventMsg) {
  console.log("follow event")
  var name = eventMsg.source.name;
  var screenName =eventMsg.source.screen_name;
  followed_post('@' + screenName +  'Thank you for following, Help make a difference feed a hungry child today @islamicrelief @ICRC_ye @monarelief ‏@purehands2 @UNICEF_Yemen ‏');
}

/////////////////////////////////////////
// Posting a an @ message to followerd //
/////////////////////////////////////////

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



//////////////////////////////////////////////////////////////////////////////
//                   Retweets!                                              //
/////////////////////////////////////////////////////////////////////////////
//comma means OR
//space means AND
setInterval (retweeting, 100*20)

var phrase = '#forgottenwar,hunger//yemen,yemen,#humanitariancrisis, save//humanity,yemen//starving,war//saudia';
var regex = /hunger, yemen/;

function retweeting(){
  var stream = T.stream('statuses/filter', {
     track: phrase,
     result_type: 'recent',
     lang: 'en'
   })

  stream.on('tweet', gotTweet);

  function gotTweet(tweet) {
    // If we wanted to write a file out
    // to look more closely at the data
    // var fs = require('fs');
    // var json = JSON.stringify(tweet,null,2);
    // fs.writeFile("tweet.json", json);

    // Note that according to twitter docs: "Exact matching of phrases
    // (equivalent to quoted phrases in most search engines) is not supported."
    // So we filter ourselves here:
    console.log('3Attempting to retweet');

    if (tweet.text) {
      console.log('Attempting to retweet ' + tweet.id_str + ": " + tweet.text);
      tweet.text = tweet.text + '#saveYemen #forgottenwar #humanitariancrisis #savehumanity'
      T.post('statuses/retweet', { id: tweet.id_str }, retweeted);
      // T.post('statuses/update', { status: '@'tweet.source.screen_name + '#humanitariancrisis' },
      // function(err, data, response) {
      //         console.log('POSTED TO USER')
      // })





      // I could also favorite (i.e. "like")
      // T.post('favorites/create', { id: tweet.id_str }, retweeted);

      //just checks is tweet is successfully retweeted
      function retweeted(err, data, response) {
        if (err) {
          console.log("Error: " + err.message);
        } else {
          console.log('Retweeted: ' + tweet.id);
        }
      }
    }
  }
}
//////////////////////////////////////////////////////////////////////////////
//          Favoriting TWEETS                                               //
// //////////////////////////////////////////////////////////////////////////
// setInterval (fav, 1000*20)

function fav(){
  // Set up your search parameters
  var params = {
    q: '#saveYemen',
    count: 100,
    result_type: 'recent',
    lang: 'en'
  }

  // Initiate your search using the above paramaters
  T.get('search/tweets', params, function(err, data, response) {
    // If there is no error, proceed
    if(!err){
      // Loop through the returned tweets
      for(let i = 0; i < data.statuses.length; i++){
        // Get the tweet Id from the returned data
        let id = { id: data.statuses[i].id_str }
        // Try to Favorite the selected Tweet
        T.post('favorites/create', id, function(err, response){
          // If the favorite fails, log the error message
          if(err){
            console.log("error");
          }
          // If the favorite is successful, log the url of the tweet
          else{
            //was user.screen_name
            let username = response.screen_name;
            let tweetId = response.id_str;
            console.log('Favorited: ', `https://twitter.com/${username}/status/${tweetId}`)
          }
        });
      }
    } else {
      console.log(err);
    }
  })
}
