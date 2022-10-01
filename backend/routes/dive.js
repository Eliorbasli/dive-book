const router = require("express").Router();
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

// get all DiveLog
router.get("/", async (req, res) => {
  try {
    const logs = await Dive.find();
    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
