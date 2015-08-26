var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EstablishmentSchema = new Schema({
    name: { type: String, required: true, index: { unique: true } },
    phonenumber: { type: String, required: true },
    time: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    zipcode: { type: Number, required: true },
    deals: { type: String, required: true },
    focus: { type: String, required: true },
    flag: { type: Boolean, default: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Establishment', EstablishmentSchema);