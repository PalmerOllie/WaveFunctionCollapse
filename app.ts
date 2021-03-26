let message: string = "Hello, TypeScript!";

let heading = document.createElement("h1");
heading.textContent = message;

document.body.appendChild(heading);

let grid = document.createElement("div");
grid.className = "grid-container";
document.body.appendChild(grid);

for (let i = 0; i < 100; i++) {
  grid.appendChild(makeGridItem(makeImageTile(), `tile${i}`));
}

function makeGridItem(image: HTMLImageElement, id: string): HTMLDivElement {
  let gridItem = document.createElement("div");
  gridItem.className = "grid-item";
  gridItem.id = id;
  gridItem.appendChild(image);
  return gridItem;
}

function makeImageTile() {
  let defaultImage = document.createElement("img");
  defaultImage.src = "images/simpleTileset/Grass/tile_0028.png";
  defaultImage.className = "tile";
  return defaultImage;
}
