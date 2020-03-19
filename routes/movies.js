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
// router.post("/", (req, res) => {
// 	const data = {
// 		id: 7,
// 		name: "stark",
// 		age: 60
// 	}
// let {id, name, age} = data
// Movie.create({
// 	id,
// 	name,
// 	age
// })
// 	.then(movie => {
// 			res.sendStatus(200)
// 			res.redirect("/movie")
// 		})
// 		.catch(err => {
// 			res.sendStatus(404)
// 			res.send(err)
// 		})
// })

router.post("/", (req, res) => 
console.log("----------", req.body)

)

module.exports = router