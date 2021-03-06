/*
    Author: Samiul Basir Fahim
    Title: Link uptime monitor
    Description: A website that can monitor the uptime of any website
    Date: Jun, 23, 2022
*/

// Importing the necessary modules
const http = require("http")
const handleServer = require("./modules/handleServer")
const env = require("./modules/env")

// Initializing the app
const app = {}

// configuring the app
app.config = {
	port: 3000,
}

// Creating server
app.server = () => {
	const server = http.createServer(app.handleServer)
	server.listen(env.port, () => {
		console.log(`Server is running on port ${env.port}`)
	})
}

// handle server
app.handleServer = handleServer

// run Server
app.server()
