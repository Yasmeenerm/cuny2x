'use strict';

const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey ='_slGpAXrwcLt6nn1hd0EvmewIRVx1rHXneorT5ddGKCcG4ygNiyUEiu-xZymO8iZINwUyKGcmL9uB-bTfpZlEpYnrM2dZViRd5k7-nNiMBCoOoHJFRY0t7Sj8kIhW3Yx';

const searchRequest = {
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
};

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {

  const firstResult = response.jsonBody.businesses[0];
  const prettyJson = JSON.stringify(firstResult, null, 4);

  console.log(prettyJson);
}).catch(e => {
  console.log(e);
});
