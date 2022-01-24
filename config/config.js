const config = {};


config.port = process.env.PORT || 3000;
config.dbURL = process.env.DATABASEURL || "mongodb+srv://admina:fefe@cluster9.eczki.mongodb.net/cluster9?retryWrites=true&w=majority"; // enter your MongoDB URI here

module.exports = config;
