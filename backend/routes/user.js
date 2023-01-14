const router = require("express").Router();
const User = require("../modles/User");
const bcrypt = require("bcrypt");

async function loginUser(username, password) {
  console.log("in loginUser function");

  const user = await User.findOne({ username: username });
  if (!user) {
    console.log("Wrong username");
  } else {
    const validPassword = await bcrypt.compare(password, user.password);
    // console.log(validPassword);
    if (!validPassword) {
      console.log("Wrong password");
      return;
    }
    return user;
  }
}

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
    console.log(error);
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
  //need to replace with loginUser function.
  try {
    //find user
    console.log("login api");
    const user = await User.findOne({ username: req.body.name });
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
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/updatePassword", async (req, res) => {
  console.log("update password api");
  try {
    const username = req.body.username;
    const password = req.body.password;
    const newPassword = req.body.newPassword;
    const user = await loginUser(username, password);

    if (!user) {
      console.log("user or password is wrong");
      return res.status(400);
    } else {
      // console.log("******");
      // console.log(user._id);
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);
      const updateUser = await User.findOneAndUpdate(
        { _id: user._id },
        { username: user.username, password: hashedPassword }
      );
      console.log("the password changed..");
      console.log(updateUser);
    }
    // console.log(userid, username, password, newPassword);

    res.status(200);
  } catch (err) {
    res.status(500);
  }
});

module.exports = router;
