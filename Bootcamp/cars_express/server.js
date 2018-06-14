// server.js
// load the things we need
const express = require('express');
const app = express();
// router object
const cars = [
  {
    id:1,
    name: 'FORD PATHFINDER',
    year : '2015',
  },
  {
    id:2,
    name: 'TESLA',
    year: '2020'
  }
]

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page
app.get('/', (req, res) => {
    res.render('index', { cars:cars });
})

//about page
//query base on car ID
 app.get('/car/:id', (req, res) => {
   //finds the car in the car array & returns it
     const car = cars.filter((car) => {
       return car.id == req.params.id
     })[0]
      // console.log("car", car);

     res.render('car', {
       name: car.name,
       year: car.year,
       id: car.id
     });
 })

app.listen(8000);
console.log('8000 is the magic port');
