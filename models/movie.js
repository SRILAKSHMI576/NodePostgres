const Sequelize = require("sequelize")
const sequelize = new Sequelize('movies', 'sri', '123', {
	host: 'localhost',
	dialect: 'postgres' ,
	port:5432,
	pool: {
		max: 30,
		min: 0,
		idle: 10000
	  }
});

const movie = sequelize.define('movie', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		defaultValue: null

	},
	name: {
	  type: Sequelize.STRING,
	  primaryKey: false,
	  defaultValue: null
	},
	age: {
	  type: Sequelize.INTEGER,
	  primaryKey: false,
	  defaultValue: null
	},
	createdAt: {
		type: Sequelize.DATE,
		primaryKey: false,
		defaultValue: null
	},
	updatedAt: {
		type: Sequelize.DATE,
		primaryKey: false,
		defaultValue: null
	}
  });
movie.sync({}).then(function(){
	return movie.create({
		id:3,
		name:"Script",
		age:56
	}).then(function(user){
		console.log(user);
	})
});

