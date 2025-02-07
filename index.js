const express = require("express");
const fs = require("fs");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const quoteData = JSON.parse(fs.readFileSync("quote.json", "utf8"));

app.get("/anime", (req, res) => {
  res.json(quoteData);
});

app.get("/quote", (req, res) => {
  const randomQuote = quoteData[Math.floor(Math.random() * quoteData.length)];
  res.json(randomQuote);
});

app.listen(PORT, () => {
  console.log(`Anime API is running at http://localhost:${PORT}`);
});
