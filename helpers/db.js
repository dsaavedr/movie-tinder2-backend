const mongoose = require("mongoose");
require("dotenv").config();

const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(process.env.MONGO_URI, connectionOptions);
mongoose.Promise = global.Promise;

module.exports = {
    User: require("../users/user.model")
};
