const express = require("express");
const app = express();
const mongoose = require("mongoose");
//require('dot.env/config');

//middlewares
/*app.use('/', () => {
    console.log("This is a middleware running");
});
*/
// routes
app.get("/", (req, res) => {
    res.send("We are on home.")
});
//
app.get("/posts", (req, res) => {
    res.send("We are on posts.")
});

// connect to database
mongoose.connect(
    'http://data.mongodb-api.com/app/data-xcrrv/endpoint/data/v1',
    {useNewUrlParser: true},
    ()=>console.log("connected"));

// listening to the server
app.listen(5000);