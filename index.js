require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

// mongoose.connect("mongodb://127.0.0.1/marvel-app");

const comicsRoutes = require("./routes/comics");
const charactersRoutes = require("./routes/characters");
const favoritesRoutes = require("./routes/favorites");
const userRoutes = require("./routes/user");

app.use(comicsRoutes, charactersRoutes, favoritesRoutes, userRoutes);

app.all("*", (req, res) => {
  console.log("route not found");
  res.status(404).json({ message: "route not found" });
});

app.listen(process.env.PORT, () => {
  console.log("server is running");
});
