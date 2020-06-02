// Exemple de traitement d'une API
const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

module.exports = async (client, message, args) => {
  const express = require("express");
  const morgan = require("morgan");
  const dotenv = require("dotenv");

  // Lecture du port 5000
  const app = express();
  app.listen(5000, () => {
    console.log("Connection au port 5000 de l'API APEX");
  });

  if (args[0] === "apex") {
    if (args[1] === "pc" || args[1] === "PC") {
      const platform = "5";
    } 
    
    if (args[1] === "xbox" || args[1] === "XBOX") { 
      const platform = "1";
    }

    if (args[1] === "psn" || args[1] === "PSN") {

    }
  }
};
