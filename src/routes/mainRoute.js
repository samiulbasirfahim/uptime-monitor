const mainRoute = (request, callback) => {
	callback(200, {
		message: "Welcome to the main route",
	})
}

module.exports = mainRoute
