const { Schema, ...mongoose } = require("mongoose");

const schema = new Schema({
    email: { type: String, required: true },
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() }
});

schema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: (doc, ret) => {
        delete ret._id;
        delete ret.hash;
    }
});

const User = mongoose.model("User", schema);

module.exports = User;
