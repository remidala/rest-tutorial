const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//require('dotenv/config');

app.use(bodyParser.json());

//import routes
const postsRouter = require('./routes/posts')


//middlewares
app.use("/posts", postsRouter);


app.get("/", (req, res) => {
    res.send("We are on home.")
});


app.get("/posts", (req, res) => {
   res.send("We are on posts.")
});


// connect to database
mongoose.connect(
    'http://data.mongodb-api.com/app/data-xcrrv/endpoint/data/v1',
    {useNewUrlParser: true},
    ()=>console.log("connected to DB"));

// listening to the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    });