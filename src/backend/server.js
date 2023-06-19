import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import db from "./db/index.js";
import hdRoutes from "./routes/hdRoutes.js";
import locRoutes from "./routes/locRoutes.js";

// const db = require("./db");

const app = express();
const apiPort = 3030;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/hds", hdRoutes);
app.use("/locs", locRoutes);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
