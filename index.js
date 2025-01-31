const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Restaurant = require('./models/Restaurant');

dotenv.config();  // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON request body
app.use(express.json());

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Route to return all restaurants 
app.get('/Restaurants', async (req, res) => {
    try {
      // Fetch all restaurants without any sorting or filtering
      const Restaurants = await Restaurant.find();
  
      // Log the results to the console for debugging
      console.log("Found restaurants:", Restaurants);
  
      // If no restaurants found, return a 404 error
      if (Restaurants.length === 0) {
        return res.status(404).json({ message: "No restaurants found" });
      }
  
      // Return the restaurants as a JSON response
      res.json(Restaurants);
    } catch (err) {
      console.error("Error fetching restaurants:", err);
      res.status(500).send(err);
    }
  });
  
// Route to return restaurants by cuisine (case-sensitive)
app.get('/restaurants/cuisine/:cuisine', async (req, res) => {
  const { cuisine } = req.params;  // Extract the cuisine parameter from the route
  console.log('Searching for cuisine:', cuisine);  // Log the cuisine being queried for

  try {
    const restaurants = await Restaurant.find({ cuisine: cuisine });
    console.log("Found restaurants by cuisine:", restaurants);  // Log the results for debugging

    if (restaurants.length === 0) {
      return res.status(404).json({ message: "No restaurants found for this cuisine" });
    }

    res.json(restaurants);
  } catch (err) {
    console.error("Error fetching restaurants by cuisine:", err);
    res.status(500).send(err);
  }
});

// Route to return restaurants with specific cuisine and city filtering (Delicatessen and not in Brooklyn)
app.get('/restaurants/Delicatessen', async (req, res) => {
  try {
    const restaurants = await Restaurant.find({
      cuisine: 'Delicatessen',
      city: { $ne: 'Brooklyn' }  // Exclude restaurants from Brooklyn
    }).select('cuisine name city -_id').sort({ name: 1 });  // Sort by name in ascending order

    if (restaurants.length === 0) {
      return res.status(404).json({ message: "No delicatessen restaurants found" });
    }

    res.json(restaurants);
  } catch (err) {
    console.error("Error fetching delicatessen restaurants:", err);
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
