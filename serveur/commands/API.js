// API tracker APEX Legends
module.exports = (client, message, args) => {
  const express = require("express");
  const morgan = require("morgan");
  const dotenv = require("dotenv");

  // Appel du fichier config de l'API APEX 
  dotenv.config({ path: "./config.env" });
  const app = express();

  if (process.env.NODE_ENV === "API_APEX") {
    app.use(morgan("dev"));
  }
  // Profile
  app.use("/api/v1/profile", require("./apexlegends/profile"));

  // On définie le port de connexion
  const port = process.env.PORT || 8000;

   // Lecture du port 5000
  app.listen(port, () => {
    console.log(`${process.env.NODE_ENV} fonctionne sur le port: ${port}`);
  });
};
