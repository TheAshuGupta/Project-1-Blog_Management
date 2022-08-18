const mongoose = require('mongoose');
const express = require('express');
const route = require('./routes/route');

const app = express();
const PORT = process.env.port || 3001;

app.use(express.json());

mongoose.connect('mongodb+srv://the_Ash:ashutosh54264850@cluster1.wqufj.mongodb.net/BlogManagement', {useNewUrlParser: true})
.then(() => console.log("The application is successfylly connected with MongoDb."))
.catch(err => console.log('MongodB Server Error!', err.message));

app.use('/', route);

app.listen(PORT, function () {
  console.log('The is application is running on', PORT, 'Port.');
})