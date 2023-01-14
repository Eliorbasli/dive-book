const express = require("express");
const mongoose = require("mongoose");
const dotenv = require(`dotenv`);
const app = express();
const diveRoute = require("./routes/dive");
const userRoute = require("./routes/user");
const cors = require("cors");

dotenv.config();

app.use(express.json());

mongoose.connect(
  // "mongodb://localhost:27017/test1Dive",
  // "mongodb://host.docker.internal:27017/test1Dive",
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.5pgktbm.mongodb.net/?retryWrites=true&w=majority`,
  (err) => {
    if(err){
      console.log(err)
    }else{
      useNewParser: true;
      console.log("MongoDb Connected!");

    }
  }
);

app.use("/api/dive", diveRoute);
app.use("/api/user", userRoute);

app.listen(5000, () => {
  console.log("Backend server is running.. on 5000 port");
});
