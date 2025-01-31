const mongoose = require('mongoose');

// Defines the schema for a restaurant
const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  cuisine: { type: String, required: true },
  restaurant_id: { type: String, required: true },
  address: {
    building: { type: String },
    street: { type: String },
    zipcode: { type: String }
  }
});

// Creates the model based on the schema
const Restaurant = mongoose.model('Restaurant', restaurantSchema);

// Exports the model so it can be used elsewhere
module.exports = Restaurant;
