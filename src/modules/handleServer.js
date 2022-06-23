/*
    Author: Samiul Basir Fahim
    Title: handle server
    Description: server handle function here
    Date: jun 24, 2022
*/

// Importing the necessary modules
const url = require("url")
const { StringDecoder } = require("string_decoder")
const routes = require("../routes/route")
const notFound = require("../routes/notFoundRoute")

// codes for handling the server
const handleServer = (req, res) => {
	const parsedUrl = url.parse(req.url)
	const pathWithSlashes = parsedUrl.pathname
	const path = pathWithSlashes.replace(/^\/|\/$/g, "")
	let body = ""
	const query = parsedUrl.query
	const decoder = new StringDecoder("utf-8")
	req.on("data", (chunkOfBuffer) => {
		body += decoder.write(chunkOfBuffer)
	})
	req.on("end", (err) => {
		if (err) {
			console.log(err)
		} else {
			const request = {
				parsedUrl,
				pathWithSlashes,
				path,
				query,
				body,
			}
			const routeFunction = routes[path] ? routes[path] : notFound
			routeFunction(request, (statusCode, payload) => {
				res.writeHead(typeof statusCode === "number" ? statusCode : 500)
				res.end(
					JSON.stringify(typeof payload === "object" ? payload : {})
				)
			})
		}
	})
}

module.exports = handleServer
