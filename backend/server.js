const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

const hamsters = require("./routes/hamsters.js");
const matches = require("./routes/matches.js");
const winners = require("./routes/winners.js");
const losers = require("./routes/losers.js");
const matchWinners = require("./routes/matchWinners.js");
const frequentPlayers = require("./routes/frequentPlayers.js");
const defeatedby = require("./routes/defeatedby.js");
const score = require("./routes/score.js");

const getDatabase = require("./database.js");
const db = getDatabase();

const PORT = process.env.PORT || 2010;
const buildFolder = path.join(__dirname, "../build");

// const staticFolder = path.join(__dirname, "frontend");

//middleware läggs alltid FÖRE endpoints
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`, req.params);
  next();
});

app.use(express.json());
app.use(cors());
app.use(express.static(staticFolder));

//ROUTES
app.use("/hamsters", hamsters);
app.use("/matches", matches);
app.use("/winners", winners);
app.use("/losers", losers);
app.use("/matchWinners", matchWinners);
app.use("/frequentPlayers", frequentPlayers);
app.use("/defeatedby", defeatedby);
app.use("/score", score);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

//Startar servern
app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
