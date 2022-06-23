/*
    Author: Samiul Basir Fahim
    Title: handle server
    Description: server handle function here
    Date: jun 24, 2022
*/

// Importing the necessary modules
const url = require("url")
const { StringDecoder } = require("string_decoder")

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
	req.on("end", () => {
		res.write(body)
		res.write(`\nPath: ${path}`)
		res.write(`\nQuery: ${query}`)
		res.end(`\nEnd of request`)
	})
}

module.exports = handleServer
