import { getAllTileData } from "./tiles";
import express from "express";
import cors from "cors";

const app = express();
const port = 5001; // default port to listen

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // For legacy browser support
};


app.use(cors(corsOptions));
app.use("/images", express.static("images"));
app.use("/favicon.ico", express.static("favicon.ico"));

// define a route handler for the default home page
app.get("/tiles", (req, res) => {
  const allTiles = JSON.stringify(getAllTileData());
  res.send(allTiles);
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
