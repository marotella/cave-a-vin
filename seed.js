const mongoose = require('mongoose');
const Wine = require('./models/wine'); // replace with your own Wine model
require("dotenv").config()
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
fetch('https://api.sampleapis.com/wines/reds')
  .then((response) => response.json())
  .then((redWines) => {
    Wine.insertMany(redWines).then(() => {
      console.log('Inserted red wines into database');
    }).catch((err) => {
      console.log('Error inserting red wines into database:', err);
    });
  }).catch((err) => {
    console.log('Error fetching red wines:', err);
  });

// fetch white wines and insert into database
fetch('https://api.sampleapis.com/wines/whites')
  .then((response) => response.json())
  .then((whiteWines) => {
    Wine.insertMany(whiteWines).then(() => {
      console.log('Inserted white wines into database');
    }).catch((err) => {
      console.log('Error inserting white wines into database:', err);
    });
  }).catch((err) => {
    console.log('Error fetching white wines:', err);
  });