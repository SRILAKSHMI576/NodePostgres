const Sequelize = require("sequelize")
const db = require("../config/database")

const Movie = db.define('movie', {
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

module.exports = Movie;
