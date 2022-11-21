const router = require("express").Router();
const User = require("../modles/User");
const bcrypt = require("bcrypt");

// register

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      picture: req.body.picture,
    });

    //save user and send response
    const user = await newUser.save();

    console.log(user);

    res.status(200).json(user._id);
  } catch (error) {
    console.log("from error..");
    console.log(error.code);
    if (error.code == 11000) {
      msg = "User alredy exists";
    } else {
      msg = error.message;
    }
    res.status(500).json(error);
  }
});

//login

router.post("/login", async (req, res) => {
  try {
    //find user
    const user = await User.findOne({ username: req.body.name });
    console.log("login api");
    if (!user) {
      console.log("Wrong username or password");
      return res.status(400).json("Wrong username or password");
    } else {
      console.log(user);
    }
    //validate password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      res.status(400).json("Wrong username or password!");
    } else {
      res.status(200).json({
        _id: user.id,
        username: user.username,
        userimage: user.picture,
      });
    }

    //sent res

    // save username in localStorage

    //move to next page
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
