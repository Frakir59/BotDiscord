const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

module.exports = router.get("/:platform/:gamertag", async (req, res) => {
  try {
    const headers = {
      "TRN-Api-Key": process.env.TRACKER_API_KEY
    };

    const { platform, gamertag } = req.params;
    const reponse = await fetch(`${process.env.TRACKER_API_URL}/profile/${platform}/${gamertag}`, {
      headers
    });

    const data = await reponse.json();
    res.json(data);
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "serveur erreur"
    });
  }
});
