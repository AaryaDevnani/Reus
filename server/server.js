const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

// DEV / PROD
const env = "";
const PORT = 4000;
const oneDayTime = 24 * 60 * 60 * 100;

//connect to DB
if (env == "DEV") {
  mongoose.connect("mongodb://127.0.0.1:27017/reus", () =>
    console.log("Connected to Local MongoDB")
  );
} else {
  mongoose.connect(process.env.DB_CONNECTION_STRING, () =>
    console.log("Connected to MongoDB")
  );
}

const db = mongoose.connection;
db.on("error", (err) => {
  console.error(err);
});

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
const userRoute = require("./Routes/Auth");
const itemRoute = require("./Routes/Item");
const groceryItemRoute = require("./Routes/GroceryItem");
const ByproductRoute = require("./Routes/Byproduct");
const donationRoute = require("./Routes/Donation");

// Routes middlewares
app.use("/api/user", userRoute);
app.use("/api/items", itemRoute);
app.use("/api/groceries", groceryItemRoute);
app.use("/api/byproduct",ByproductRoute);
app.use("/api/donation",donationRoute);

const checkExpirations = require("./Helpers/checkExpirations");

const checkExpirationsDaily = async () => {
  setTimeout(async () => {
    await checkExpirations();
    await checkExpirationsDaily();
  }, oneDayTime);
};

checkExpirations();
checkExpirationsDaily()

//set port
app.listen(PORT, () => console.log("Server running on port", PORT));
