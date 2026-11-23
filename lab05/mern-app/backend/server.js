const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

const mongoUrl = process.env.MONGO_URL || "mongodb://mongo:27017/mern";

mongoose.connect(mongoUrl)
    .then(() => console.log("Polaczono z MongoDB"))
    .catch(err => console.error("Blad MongoDB:", err));

app.get("/api/status", (req, res) => {
    res.json({
        message: "Backend Express dziala",
        database: mongoose.connection.readyState === 1
            ? "MongoDB polaczone"
            : "MongoDB niepolaczone"
    });
});

app.listen(3001, "0.0.0.0", () => {
    console.log("Serwer dziala na porcie 3001");
});
