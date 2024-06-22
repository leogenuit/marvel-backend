const express = require("express");
const Favorite = require("../models/Favorite");
const router = express.Router();

router.post("/favorites", async (req, res) => {
  console.log("ici");
  try {
    const favorite = new Favorite({
      name: req.body.name,
    });
    await favorite.save();
    console.log(favorite);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.status(201).json({ message: "Favoris created" });
});

router.get("/favorites-all", async (req, res) => {
  try {
    const favorites = await Favorite.find();
    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
