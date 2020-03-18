const express = require("express")
const exhbs = require("express-handlebars")
const bodyParser = require("body-parser")
const path = require("path")
const port = 5000

const app = express()

//Datebase
const db = require("./config/database")

// Test DB
db.authenticate()
  .then(function() {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

app.get("/", (req, res) => {
	res.send("hiiiiiiiiii")
})

app.listen(port, (req, res) => {
	console.log("server started")
})