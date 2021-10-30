const config = {};


config.port = process.env.PORT || 3000;
config.dbURL = process.env.DATABASEURL || "mongodb+srv://"; // enter your MongoDB URI here

module.exports = config;
