const express = require("express")
const exphbs = require("express-handlebars")
const bodyParser = require("body-parser")
const path = require("path")
const port = 5000

const app = express()

app.engine("handlebars", exphbs({defaultLayout: "main"}))
app.set("view engine", "handlebars")

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

//routes
app.use("/movies", require("./routes/movies"))

app.listen(port, (req, res) => {
	console.log("server started")
})