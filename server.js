const express = require("express");
const path = require("path");
const axios = require("axios");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/cars", async function(req, res) {
  try {
    const make = req.query.make;

    if (!make) {
      return res.status(400).json({
        error: "A vehicle make is required"
      });
    }

    const response = await axios.get(
      "https://api.marketcheck.com/v2/search/car/active",
      {
        params: {
          api_key: process.env.MARKETCHECK_KEY,
          make: make,
          rows: 20,
          photo_links: true,
          has_price: true
        },
        headers: {
          Accept: "application/json"
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(
      "MarketCheck error:",
      error.response ? error.response.data : error.message
    );

    res.status(
      error.response ? error.response.status : 500
    ).json({
      error: "Unable to retrieve vehicle listings"
    });
  }
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});