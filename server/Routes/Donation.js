const express = require("express");
const router = express.Router();
const Donation = require("../Models/Donations");


router.get("/:userId", async (req, res) => {
    const userid  = req.params.userId
    if (userid) {
        try {
            const items = await Donation.find({ userId: userid });
            res.status(200).json({ error: "", items });
          } catch (error) {
            res.status(400).json({ error });
      }
    }
  
  });

  router.post("/", async (req, res) => {
  const {
    name,
    userId,
    expiryDate,
    quantity,
    category,
    calories,
    imageURL,
    canServe,
    booked,
    bookedBy
  } = req.body;

  const donation = new Donation({
    name,
    userId,
    expiryDate,
    quantity,
    category,
    calories,
    imageURL,
    canServe,
    booked,
    bookedBy
  });
  try {
    newItem = await donation.save();
    res.status(201).json({ error: "", newItem });
  } catch (error) {
    res.status(400).json({ error });
  }
});

  module.exports = router;