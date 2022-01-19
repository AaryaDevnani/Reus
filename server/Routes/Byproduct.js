const express = require("express");
const router = express.Router();
const Byproduct = require("../Models/Byproduct");

router.post("/", async (req, res) => {
  const { itemName, itemByproduct, use, videoURL } = req.body;
  const byproduct = new Byproduct({
    itemName,
    itemByproduct,
    use,
    videoURL
  });
  try {
    newByproduct = await byproduct.save();
    res.status(201).json({ error: "" });
  } catch (error) {
    res.status(400).json({ error });
  }
});
router.get("/", async (req, res) => {
  const { name } = req.query;
  if (name) {
    try {
      const items = await Byproduct.find({ itemName: name });
      let error = "";
      if (!items) {
        error = "No item found";
      }
      return res.status(200).json({ error, items });
    } catch (error) {
      console.log({ error });
      return res.status(400).json({ error });
    }
  }

  try {
    const items = await Byproduct.find({});
    return res.status(200).json({ error: "", items });
  } catch (error) {
    console.log({ error });
    return res.status(400).json({ error });
  }
});

router.put("/", async (req, res) => {
  const { itemId, itemName, itemByproduct, use, videoURL } = req.body;
  const byproduct = Byproduct.findById(itemId);
  if (!byproduct) {
    return res.status(400).json({ error: "No byproduct found" });
  }
  try {
    await Byproduct.updateOne(
      { _id: itemId },
      {
        itemName,
        itemByproduct,
        use,
        videoURL,
        updatedAt: Date.now()
      },
      { multi: false }
    );
  } catch (error) {
    return res.status(500).json({ error });
  }
  res.status(201).json({ error: "" });
});

module.exports = router;
