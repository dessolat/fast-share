const { Schema, model } = require('mongoose');

const documentSchema = new Schema({
	value: {
		type: String,
		required: true
	}
})

module.exports = model('Document', documentSchema)