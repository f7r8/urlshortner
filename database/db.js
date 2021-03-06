'use strict';

const config = require('../config/config');
const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		await mongoose.connect(config.mongoURI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log(`Connected to MongoDB: ${mongoose.connection.host}`);
	}
	catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};

module.exports = connectDB;