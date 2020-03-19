const express = require("express")
const router = express.Router()
const db = require("../config/database")
const Movie = require("../models/movie")

// get all data
router.get("/", (req, res) => 
	Movie.findAll()
	.then(movies => {
		res.send(movies)
		res.sendStatus(200)
	})
	.catch(err => console.log(err))
)

//Add movie
router.post("/", (req, res) => {
	const body = req.body
	console.log("body", body)
	let myData = new Movie(body)
	myData
		.save()
		.then(movie => {
			res.status(201)
			return res.send(movie)
		})
		.catch(err => {
			res.status(404)
			res.send(err)
		})
})

//get movie by single id
router.get("/:id", (req, res) => {
	Movie.findById(req.params.id)
	.then(movies => {
		res.send(movies)
		res.sendStatus(200)
	})
	.catch(err => console.log(err))
})

// Update movie
router.put("/:id", (req, res) => {
	Movie.findById(req.params.id)
	  .then(movie => {
		movie.id = req.body.id;
		movie.name = req.body.name;
		movie.age = Number(req.body.age);
		
		movie
		  .save()
		  .then(() => res.json(movie))
		  .catch(err => res.status(400).json("Error: " + err));
	  })
	  .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router