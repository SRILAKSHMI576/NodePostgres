const express = require("express")
const exphbs = require("express-handlebars")
const bodyParser = require("body-parser")
const Sequelize= require("sequelize")
const path = require("path")
const cors = require("cors")
const port = 5000

const app = express()
app.use(cors())
app.use(bodyParser())

app.engine("handlebars", exphbs({defaultLayout: "main"}))
app.set("view engine", "handlebars")

//Datebase
const db = require("./config/database")

//Set static folder
app.use(express.static(path.join(__dirname, 'public')))

// Test DB
db.authenticate()
  .then(function() {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

//routes
app.use("/movies", require("./routes/movies"))

app.listen(port, (req, res) => {
	console.log("server started")
})