const user = require("../models/product.models");
const userdata = require("../models/product.models");

const opencage = require("opencage-api-client");

const getUsers = async (req, res) => {
  try {
    const Userdetails = await user.find({});
    res.status(200).json(Userdetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const Userdetails = await user.findById(id);
    res.status(200).json(Userdetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const Userdetails = await userdata.create(req.body);
    res.status(200).json(Userdetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const Userdetails = await user.findByIdAndUpdate(id, req.body);
    if (!Userdetails) {
      return res.status(404).json({ message: "User not found" });
    }
    const Updateduser = await user.findById(id);
    res.status(200).json(Updateduser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await user.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json("Deleted Successfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//geo-location

const updateUserLocation = async (latitude, longitude) => {
  try {
    const data = await opencage.geocode({
      q: `${latitude},${longitude}`,
      language: "en",
    });
    if (data.status.code === 200 && data.results.length > 0) {
      const place = data.results[0];
      console.log(place.formatted);
      console.log(place.components.road);
      console.log(place.annotations.timezone.name);
    } else {
      console.log("status", data.status.message);
      console.log("total_results", data.total_results);
    }
  } catch (error) {
    console.log("error", error.message);
    if (error.status.code === 402) {
      console.log("hit free trial daily limit");
      console.log("become a customer: https://opencagedata.com/pricing");
    }
  }
};

// Assuming you have a user object with latitude and longitude fields
async function User() {
  const User = await User.findById(User_id); // Retrieve user from database

}
const latitude = User.location.coordinates[1]; // Assuming latitude is stored at index 1
const longitude = User.location.coordinates[0]; // Assuming longitude is stored at index 0
someFunction();

updateUserLocation(latitude,longitute);

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  updateUserLocation,
};
