const Twit = require('twit')
const config = require('./config')

const Tabletop = require('tabletop')

var T = new Twit(config)

const spreadsheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vScPG8Myo6hcJQDbXNDhMrP-4pzQq3aFMbqzI-KNR-70zARS5FrND197r1u2M3a7GouGkrHXgtclJaD/pubhtml?gid=0&single=true'

  Tabletop.init({
    key: spreadsheetUrl,
    callback(data, tabletop) {
      console.log(data)
    },
    simpleSheet: true
  })

  function showInfo(data, tabletop) {
    alert('Successfully processed!')
    console.log(data);
  }
