require("dotenv").config()
const mongoose = require('mongoose');
const Wine = require('./models/wine'); // replace with your own Wine model

const MONGODB_URI = process.env.MONGODB_URI

// connect to MongoDB Atlas database
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch((err) => {
  console.log('Error connecting to MongoDB Atlas:', err);
});

// fetch red wines and insert into database
fetch('https://api.sampleapis.com/wines/reds') //get the data from the api
  .then((response) => response.json()) //change into json
  .then((redWines) => {
    Wine.insertMany(redWines).then(() => { //insert the data and give amessage to confirm.
      console.log('Inserted red wines into database');
    }).catch((err) => {
      console.log('Error inserting red wines into database:', err);
    });
  }).catch((err) => {
    console.log('Error fetching red wines:', err);
  });

// fetch white wines and insert into database
fetch('https://api.sampleapis.com/wines/whites') //get the data from the api
  .then((response) => response.json()) //make the data json
  .then((whiteWines) => {
    Wine.insertMany(whiteWines).then(() => { //insert data and give message to confirm.
      console.log('Inserted white wines into database');
    }).catch((err) => {
      console.log('Error inserting white wines into database:', err);
    });
  }).catch((err) => {
    console.log('Error fetching white wines:', err);
  });