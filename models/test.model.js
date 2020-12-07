const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    required: {
        type: Boolean,
        required: false,
    },
}, { timestamps: true });

const Test = mongoose.model('Test', testSchema);

module.exports = Test;
