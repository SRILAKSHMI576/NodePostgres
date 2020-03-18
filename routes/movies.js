const express = require("express")
const router = express.Router()
const db = require("../config/database")
const Movie = require("../models/movie")

router.get("/", (req, res) => 
Movie.findAll()
	.then(movies => {
		console.log(movies)
		res.sendStatus(200)
	})
	.catch(err => console.log(err))
)

module.exports = router