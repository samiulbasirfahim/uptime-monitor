/*
    Author: Samiul Basir Fahim
    Title: Environment Variables
    Description: this is environment Variables 
    Date: Jun 24, 2022
*/

const passedEnvironment =
	typeof process.env.NODE_ENV === "string"
		? process.env.NODE_ENV
		: "development"

const finalEnvironment =
	passedEnvironment === "development" || passedEnvironment === "production"
		? passedEnvironment
		: "development"

const env =
	finalEnvironment !== "production"
		? {
				port: 3000,
				environment: "development",
		  }
		: {
				port: 5000,
				environment: "production",
		  }

module.exports = env
