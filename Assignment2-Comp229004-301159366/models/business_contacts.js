let mongoose = require('mongoose');

// Create a model class
let businessContactsModel = mongoose.Schema(
    {
        name: String,
        number: Number,
        email: String,
    },
    {
        collection: "business_contacts"
    }
);

module.exports = mongoose.model('business_contacts', businessContactsModel);