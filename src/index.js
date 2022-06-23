/*
    Author: Samiul Basir Fahim
    Title: Link uptime monitor
    Description: A website that can monitor the uptime of any website
    Date: Jun, 23, 2022
*/

// Importing the necessary modules
const http = require("http")

// Initializing the app
const app = {}

// configuring the app
app.config = {
	port: 3000,
}

// Creating server
app.server = () => {
	const server = http.createServer(app.handleServer)
	server.listen(app.config.port, () => {
		console.log(`Server is running on port ${app.config.port}`)
	})
}

// handle server
app.handleServer = (req, res) => {
	res.end("Hello World")
}

// run Server
app.server()
