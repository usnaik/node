const mongoose = require('mongoose')

const subscriberSchema = mongoose.Schema({
	name: {
		type: String,
		require: true
	},
	subscribedToChannel: {
		type: String,
		require: true
	},
	subscribeDate: {
		type: String,
		require: true,
		default: Date.now
	}
})

module.exports = mongoose.model('subscribers', subscriberSchema)