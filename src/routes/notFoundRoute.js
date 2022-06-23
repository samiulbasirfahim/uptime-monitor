const notFound = (request, callback) => {
	callback(404, {
		message: "The URL you requested was not found on this server.",
	})
}

module.exports = notFound
