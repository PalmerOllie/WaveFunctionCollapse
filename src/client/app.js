"use strict";
const heading = document.createElement("h1");
heading.textContent = "Hello, TypeScript!"; //+ getRandomFileInFolder();
document.body.appendChild(heading);
const grid = document.createElement("div");
grid.className = "grid-container";
document.body.appendChild(grid);
var SocketType;
(function (SocketType) {
    SocketType[SocketType["Grass"] = 0] = "Grass";
    SocketType[SocketType["PurePavement"] = 1] = "PurePavement";
    SocketType[SocketType["PavementEdge"] = 2] = "PavementEdge";
})(SocketType || (SocketType = {}));
fetch("http://localhost:5001").then(async (res) => {
    console.log(res.status);
    const allTiles = (await res.json());
    console.log(allTiles);
    const someTile = allTiles[0];
    for (let i = 0; i < 100; i++) {
        grid.appendChild(makeGridItem(makeImageTile(someTile.imageSrc), `tile${i}`));
    }
});
function makeGridItem(image, id) {
    let gridItem = document.createElement("div");
    gridItem.className = "grid-item";
    gridItem.id = id;
    gridItem.appendChild(image);
    return gridItem;
}
function makeImageTile(imagePath) {
    let defaultImage = document.createElement("img");
    defaultImage.src = `http://localhost:5001/tiles/${imagePath}`; //"images/simpleTileset/Grass/tile_0028.png";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsb0JBQW9CLENBQUMsQ0FBQyw0QkFBNEI7QUFDeEUsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFbkMsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDO0FBQ2xDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRWhDLElBQUssVUFJSjtBQUpELFdBQUssVUFBVTtJQUNiLDZDQUFTLENBQUE7SUFDVCwyREFBZ0IsQ0FBQTtJQUNoQiwyREFBWSxDQUFBO0FBQ2QsQ0FBQyxFQUpJLFVBQVUsS0FBVixVQUFVLFFBSWQ7QUFVRCxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hCLE1BQU0sUUFBUSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQWUsQ0FBQztJQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXRCLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU3QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzVCLElBQUksQ0FBQyxXQUFXLENBQ2QsWUFBWSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUMzRCxDQUFDO0tBQ0g7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUVILFNBQVMsWUFBWSxDQUFDLEtBQXVCLEVBQUUsRUFBVTtJQUN2RCxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO0lBQ2pDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQztBQUVELFNBQVMsYUFBYSxDQUFDLFNBQWlCO0lBQ3RDLElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakQsWUFBWSxDQUFDLEdBQUcsR0FBRywrQkFBK0IsU0FBUyxFQUFFLENBQUMsQ0FBQyw2Q0FBNkM7SUFDNUcsWUFBWSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7SUFDaEMsT0FBTyxZQUFZLENBQUM7QUFDdEIsQ0FBQztBQUVELDZDQUE2QztBQUM3Qyx3REFBd0Q7QUFFeEQsbUNBQW1DO0FBQ25DLHdEQUF3RDtBQUN4RCx5QkFBeUI7QUFDekIscUNBQXFDO0FBQ3JDLFFBQVE7QUFDUix1RkFBdUY7QUFDdkYsSUFBSSJ9