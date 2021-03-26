var message = "Hello, TypeScript!";
var heading = document.createElement("h1");
heading.textContent = message;
document.body.appendChild(heading);
var grid = document.createElement("div");
grid.className = "grid-container";
document.body.appendChild(grid);
for (var i = 0; i < 100; i++) {
    grid.appendChild(makeGridItem(makeImageTile()));
}
function makeGridItem(image) {
    var gridItem = document.createElement("div");
    gridItem.className = "grid-item";
    gridItem.appendChild(image);
    return gridItem;
}
function makeImageTile() {
    var defaultImage = document.createElement("img");
    defaultImage.src = "images/simpleTileset/Grass/tile_0028.png";
    defaultImage.className = "tile";
    return defaultImage;
}
