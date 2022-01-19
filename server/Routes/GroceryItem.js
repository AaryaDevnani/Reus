const express = require("express");
const router = express.Router();
const GroceryItem = require("../Models/GroceryItem");

router.get("/", async (req, res) => {
  const { userid } = req.headers;
  try {
    const groceryItems = await GroceryItem.find({ userId: userid });
    res.status(200).json({ error: "", groceryItems });
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.post("/", async (req, res) => {
  const { name, userId, quantity, imageURL } = req.body;

  const groceryItem = new GroceryItem({
    name,
    userId,
    quantity,
    imageURL
  });
  try {
    await groceryItem.save();
    res.status(201).json({ error: "", groceryItem });
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.put("/", async (req, res) => {
  const { groceryItemId, quantity } = req.body;
  const groceryItem = GroceryItem.findById(groceryItemId);
  if (!groceryItem) {
    return res.status(400).json({ error: "No item found" });
  }
  try {
    await GroceryItem.updateOne(
      { _id: groceryItemId },
      {
        quantity,
        updatedAt: Date.now()
      },
      { multi: false }
    );
  } catch (error) {
    return res.status(500).json({ error });
  }
  res.status(201).json({ error: "" });
});

router.delete("/:id", async (req, res) => {
  const groceryItemId = req.params.id;
  const groceryItem = GroceryItem.findById(groceryItemId);
  if (!groceryItem) return res.status(202).json({ error: "" });
  try {
    await GroceryItem.deleteOne({
      _id: groceryItemId
    });
    res.status(202).json({ error: "" });
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
