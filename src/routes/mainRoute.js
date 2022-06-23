const mainRoute = (request, callback) => {
	callback(200, {
		message: "Hello World",
	})
}

module.exports = mainRoute
