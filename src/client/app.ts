const heading = document.createElement("h1");
heading.textContent = "Hello, TypeScript!"; //+ getRandomFileInFolder();
document.body.appendChild(heading);

const grid = document.createElement("div");
grid.className = "grid-container";
document.body.appendChild(grid);

enum SocketType {
  Grass = 0,
  PurePavement = 1,
  PavementEdge,
}

interface TileData {
  imageSrc: string;
  posX: SocketType;
  negX: SocketType;
  posY: SocketType;
  negY: SocketType;
}

fetch("http://localhost:5001/tiles").then(async (res) => {
  console.log(res.status);
  const allTiles = (await res.json()) as TileData[];
  console.log(allTiles);

  const someTile = allTiles[0];

  for (let i = 0; i < 100; i++) {
    grid.appendChild(
      makeGridItem(makeImageTile(someTile.imageSrc), `tile${i}`)
    );
  }
});

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
