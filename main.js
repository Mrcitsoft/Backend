const express = require("express");
const mongoose = require("mongoose");
const userdata = require("./models/product.models");
const user = require("./models/product.models");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log("port started at 3000");
});

app.get("/api/user", async (req, res) => {
  try {
    const Userdetails = await user.find({});
    res.status(200).json(Userdetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const Userdetails = await user.findById(id);
    res.status(200).json(Userdetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update product
app.put("/api/user/:id", async (req, res) => {
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
});

app.delete("/api/user/:id", async (req, res) => {
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
});

app.post("/api/user", async (req, res) => {
  try {
    const Userdetails = await userdata.create(req.body);
    res.status(200).json(Userdetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://polamarasettiharsha:Harsha@backend-api.nrcqx0g.mongodb.net/?retryWrites=true&w=majority&appName=Backend-API"
  )
  .then(() => {
    console.log("Data base connected");
  })
  .catch((err) => {
    console.log("error", err);
  });
