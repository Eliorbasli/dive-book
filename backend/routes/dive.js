const router = require("express").Router();
const { application } = require("express");
const Dive = require("../modles/Dive");

//create DiveLog
router.post("/", async (req, res) => {
  const newDiveLog = new Dive(req.body);
  try {
    const saveDive = await newDiveLog.save();
    res.status(200).json(saveDive);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

// get all DiveLog by userID
router.post("/getById", async (req, res) => {
  try {
    const logs = await Dive.find({ username: req.body.username }).sort({
      date: -1,
    });
    //console.log(req.body.username);
    //const logs = await Dive.find();
    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json(error);
  }
});

// router.get("/edit/:id", async (req, res) => {
//   const dive = await Dive.findById(req.params.dive_id);
//   res.render("dive/edit", { dive: dive });
// });

router.delete("/:id", async (req, res) => {
  console.log("in delete function");
  try {
    await Dive.findByIdAndDelete(req.params.id);
    res.status(200).json("remove");
  } catch (err) {
    console.log(err);
    res.status(500);
  }
  console.log(req.params);
});

module.exports = router;
