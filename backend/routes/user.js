const router = require("express").Router();
const User = require("../modles/User");
const bcrypt = require("bcrypt");

// register

router.post("/register", async (req, res) => {
  try {
    console.log("from register..");
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    //create new username
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    //save user and send response
    const user = await newUser.save();
    res.status(200).json(user._id);
  } catch (error) {
    res.status(500).json(err);
  }
});

//login

router.post("/login", async (req, res) => {
  try {
    //find user
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      res.status(400).json("Wrong username or password");
    }
    //validate password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      res.status(400).json("Wrong username or password!");
    }

    //sent res
    res.status(200).json({ _id: user.id, username: user.username });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
