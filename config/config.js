const config = {};


config.port = process.env.PORT || 3000;
config.dbURL = process.env.DATABASEURL || "mongodb+srv://new-user-001:YouSawThis@cluster0.vn8jv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

module.exports = config;
