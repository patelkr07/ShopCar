const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();
// const apiRoutes = require("./routes/apiRoutes")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use('/static', express.static(path.join(__dirname, "public/index"));
}

// app.use("/api", apiRoutes);

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./shopcar/public/index.html"));
});

app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});