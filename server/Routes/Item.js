const express = require("express");
const router = express.Router();
const Item = require("../Models/Item");
const GroceryItem = require("../Models/GroceryItem");
const Notification = require("../Models/Notification");
const generateNotifications = require("../Helpers/generateNotification");
const Donation = require("../Models/Donations");

router.get("/", async (req, res) => {
  const { itemId } = req.query;
  const { userid } = req.headers;
  if (itemId) {
    try {
      const item = await Item.findById(itemId);
      let error = "";
      if (!item) {
        error = "No item found";
      }
      return res.status(200).json({ error, item });
    } catch (error) {
      console.log({ error });
      return res.status(400).json({ error });
    }
  }
  try {
    const items = await Item.find({ userId: userid });
    res.status(200).json({ error: "", items });
  } catch (error) {
    res.status(400).json({ error });
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

  const item = new Item({
    name,
    userId,
    expiryDate: new Date(expiryDate),
    quantity,
    category,
    calories,
    imageURL,
    canServe,
    booked,
    bookedBy
  });
  try {
    newItem = await item.save();
    await generateNotifications(
      newItem.expiryDate,
      newItem.userId,
      newItem._id
    );
    res.status(201).json({ error: "", newItem });
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.put("/", async (req, res) => {
  const { itemId, booked, bookedBy, quantity, expiryDate, canServe, category } =
    req.body;
  const item = Item.findById(itemId);
  if (!item) {
    return res.status(400).json({ error: "No item found" });
  }
  try {
    await Item.updateOne(
      { _id: itemId },
      {
        booked,
        bookedBy,
        quantity,
        expiryDate,
        canServe,
        category,
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
  const userId = req.params.id;
  const item = await Item.findById(userId);
  const groceryItem = new GroceryItem({
    name: item.name,
    userId: item.userId,
    quantity: 1
  });
  if (!item) return res.status(202).json({ error: "" });
  try {
    await Item.deleteOne({
      _id: item._id
    });
      await groceryItem.save();
    
    await Notification.deleteMany({ itemId: item._id }, { multi: true });
    res.status(202).json({ error: "" });
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
