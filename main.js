const express = require("express");
const mongoose = require("mongoose");
const userroute=require("./routes/User.route.js");
const scamRouter=require("./routes/Scam.route.js");
const commentRouter=require("./routes/comment.route.js")
const app = express();

//middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routes
app.use("/api/users",userroute);
app.use("/api/scams",scamRouter);
app.use("/api/comments",commentRouter);


//connecting Server

app.listen(3000, () => {
  console.log("port started at 3000");
});



// connecting mongoose
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
