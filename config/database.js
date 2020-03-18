const Sequelize= require("sequelize")
module.exports = new Sequelize('movies', 'sri', '123', {
	host: 'localhost',
	dialect: 'postgres' ,
	operationsAliases:false,

	pool: {
		max: 30,
		min: 0,
		acquire: 30000,
		idle: 10000
	},
});