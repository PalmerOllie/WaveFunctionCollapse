import { WFC } from "./waveFuntionCollapse";
import { TileData } from "./tileTypes";

const heading = document.createElement("h1");
heading.textContent = "Hello, TypeScript!"; //+ getRandomFileInFolder();
document.body.appendChild(heading);

const grid = document.createElement("div");
grid.className = "grid-container";
document.body.appendChild(grid);

const mapWidth = 20;
const mapHeight = 5;

fetch("http://localhost:5001/tiles").then(async (res) => {
  console.log(res.status);
  const allTiles = (await res.json()) as TileData[]; //Array containing exactly one of each tile
  console.log(allTiles);
  const someTile = allTiles[0];

  let collapsedWaveTiles: TileData[] = WFC(allTiles);
  displayGrid(collapsedWaveTiles);
});

function displayGrid(tilesToDisplay: TileData[]) {
  for (let i = 0; i < mapWidth * mapHeight; i++) {
    const someTile = tilesToDisplay[i];
    grid.appendChild(
      makeGridItem(makeImageTile(someTile.imageSrc), `tile${i}`)
    );
  }
}

function makeGridItem(image: HTMLImageElement, id: string): HTMLDivElement {
  let gridItem = document.createElement("div");
  gridItem.className = "grid-item";
  gridItem.id = id;
  gridItem.appendChild(image);
  return gridItem;
}

function makeImageTile(imagePath: string): HTMLImageElement {
  let defaultImage = document.createElement("img");
  defaultImage.src = `http://localhost:5001/images/${imagePath}`; //"images/simpleTileset/Grass/tile_0028.png";
  defaultImage.className = "tile";
  return defaultImage;
}

// function getRandomFileInFolder(): string {
//   const testFolder = "images/simpleTileset/Pavement";

//   let imageArray: string[] = [];
//   readdirSync(testFolder).forEach((file: string) => {
//     console.log(file);
//     imageArray.push(<string>file);
//   });
//   return imageArray[0]; //imageArray[Math.floor(Math.random() * imageArray.length)];
// }
