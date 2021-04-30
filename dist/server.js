"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tiles_1 = require("./tiles");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
const port = 5001; // default port to listen
var corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200, // For legacy browser support
};
app.use(cors_1.default(corsOptions));
app.use("/images", express_1.default.static("images"));
app.use("/favicon.ico", express_1.default.static("favicon.ico"));
// define a route handler for the default home page
app.get("/tiles", (req, res) => {
    const allTiles = JSON.stringify(tiles_1.getAllTileData());
    res.send(allTiles);
});
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlcnZlci9zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBeUM7QUFDekMsc0RBQThCO0FBQzlCLGdEQUF3QjtBQUV4QixNQUFNLEdBQUcsR0FBRyxpQkFBTyxFQUFFLENBQUM7QUFDdEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMseUJBQXlCO0FBRTVDLElBQUksV0FBVyxHQUFHO0lBQ2hCLE1BQU0sRUFBRSxHQUFHO0lBQ1gsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLDZCQUE2QjtDQUN6RCxDQUFDO0FBR0YsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUMzQixHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQzdDLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGlCQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7QUFFdkQsbURBQW1EO0FBQ25ELEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQzdCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQWMsRUFBRSxDQUFDLENBQUM7SUFDbEQsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNyQixDQUFDLENBQUMsQ0FBQztBQUVILDJCQUEyQjtBQUMzQixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM1RCxDQUFDLENBQUMsQ0FBQyJ9