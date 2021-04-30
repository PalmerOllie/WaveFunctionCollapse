"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTileData = void 0;
const fs_1 = __importDefault(require("fs"));
// const exampleTileJSON = {
//   imageName: "tile_0028.png", //grass
// rotation:
//   posX: SocketType.Grass,
//   negX: SocketType.Grass,
//   posY: SocketType.Grass,
//   negY: SocketType.Grass,
//   neighbourLists: {
//     posX: [],
//     negX: [],
//     posY: [],
//     negY: [],
//   },
// };
//TODO: add weight
var SocketType;
(function (SocketType) {
    SocketType[SocketType["Grass"] = 0] = "Grass";
    SocketType[SocketType["PavementPure"] = 1] = "PavementPure";
    SocketType[SocketType["PavementEdge"] = 2] = "PavementEdge";
    SocketType[SocketType["PavementEdgeAdjacent"] = 3] = "PavementEdgeAdjacent";
    SocketType[SocketType["PavementEdgeDoubleAdjacent"] = 4] = "PavementEdgeDoubleAdjacent";
})(SocketType || (SocketType = {}));
function getAllTileData() {
    fs_1.default.readdirSync("./").forEach((file) => {
        console.log(file);
    });
    let tiles = fs_1.default.readdirSync("images").map((file) => {
        // console.log(file);
        const sockets = getSocketsFromImageName(file);
        return {
            imageSrc: file,
            ...sockets,
            neighbourLists: {
                posX: [],
                negX: [],
                posY: [],
                negY: [],
            },
            rotationX: true,
            rotationY: true,
        };
    });
    tiles = populateNeighboursList(tiles);
    return tiles;
}
exports.getAllTileData = getAllTileData;
function canSocketConnectToRotatableTile(socket, tileData) {
    if (socket == tileData.posX ||
        socket == tileData.negX ||
        socket == tileData.posY ||
        socket == tileData.negY) {
        return true;
    }
    return false;
}
function populateNeighboursList(tileData) {
    let tiles = [];
    tileData.forEach((t1) => {
        for (let index = 0; index < tileData.length; index++) {
            const t2 = tileData[index];
            let neighbourLists = {
                posX: [],
                negX: [],
                posY: [],
                negY: [],
            };
            if (canSocketConnectToRotatableTile(t1.posX, t2)) {
                neighbourLists.posX.push(t2);
            }
            if (canSocketConnectToRotatableTile(t1.negX, t2)) {
                neighbourLists.negX.push(t2);
            }
            if (canSocketConnectToRotatableTile(t1.posY, t2)) {
                neighbourLists.posY.push(t2);
            }
            if (canSocketConnectToRotatableTile(t1.negY, t2)) {
                neighbourLists.negY.push(t2);
            }
            const newTile = {
                imageSrc: t1.imageSrc,
                posX: t1.posX,
                negX: t1.negX,
                posY: t1.posY,
                negY: t1.negY,
                neighbourLists: neighbourLists,
                rotationX: t1.rotationX,
                rotationY: t1.rotationY,
            };
            tiles.push(newTile);
        }
    });
    return tiles;
}
function getSocketsFromImageName(imageName) {
    switch (imageName) {
        case "tile_0008.png":
            return {
                posX: SocketType.PavementPure,
                negX: SocketType.PavementEdge,
                posY: SocketType.PavementEdge,
                negY: SocketType.PavementPure,
            };
        case "tile_0009.png":
            return {
                posX: SocketType.PavementEdgeAdjacent,
                negX: SocketType.PavementEdgeAdjacent,
                posY: SocketType.PavementEdge,
                negY: SocketType.PavementPure,
            };
        case "tile_0013.png":
            return {
                posX: SocketType.PavementEdgeAdjacent,
                negX: SocketType.PavementPure,
                posY: SocketType.PavementPure,
                negY: SocketType.PavementEdgeAdjacent,
            };
        case "tile_0015.png":
            return {
                posX: SocketType.PavementEdge,
                negX: SocketType.PavementEdge,
                posY: SocketType.PavementEdge,
                negY: SocketType.PavementEdgeDoubleAdjacent,
            };
        case "tile_0036.png":
        case "tile_0117.png":
        case "tile_0913.png":
        case "tile_0914.png":
            return {
                posX: SocketType.PavementPure,
                negX: SocketType.PavementPure,
                posY: SocketType.PavementPure,
                negY: SocketType.PavementPure,
            };
        case "tile_0042.png":
            return {
                posX: SocketType.PavementEdge,
                negX: SocketType.PavementEdge,
                posY: SocketType.PavementEdgeDoubleAdjacent,
                negY: SocketType.PavementEdgeDoubleAdjacent,
            };
        case "tile_0068.png":
            return {
                posX: SocketType.PavementEdge,
                negX: SocketType.PavementEdge,
                posY: SocketType.PavementEdge,
                negY: SocketType.PavementEdge,
            };
        case "tile_0068.png":
            return {
                posX: SocketType.PavementEdge,
                negX: SocketType.PavementEdge,
                posY: SocketType.PavementEdge,
                negY: SocketType.PavementEdge,
            };
        case "tile_0028.png":
            return {
                posX: SocketType.Grass,
                negX: SocketType.Grass,
                posY: SocketType.Grass,
                negY: SocketType.Grass,
            };
        default:
            return {
                posX: SocketType.Grass,
                negX: SocketType.Grass,
                posY: SocketType.Grass,
                negY: SocketType.Grass,
            };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvc2VydmVyL3RpbGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDRDQUFvQjtBQUdwQiw0QkFBNEI7QUFDNUIsd0NBQXdDO0FBQ3hDLFlBQVk7QUFDWiw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCLDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFDNUIsc0JBQXNCO0FBQ3RCLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixPQUFPO0FBQ1AsS0FBSztBQUVMLGtCQUFrQjtBQUVsQixJQUFLLFVBTUo7QUFORCxXQUFLLFVBQVU7SUFDYiw2Q0FBUyxDQUFBO0lBQ1QsMkRBQWdCLENBQUE7SUFDaEIsMkRBQWdCLENBQUE7SUFDaEIsMkVBQW9CLENBQUE7SUFDcEIsdUZBQTBCLENBQUE7QUFDNUIsQ0FBQyxFQU5JLFVBQVUsS0FBVixVQUFVLFFBTWQ7QUFvQkQsU0FBZ0IsY0FBYztJQUM1QixZQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLEtBQUssR0FBZSxZQUFFLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQzVELHFCQUFxQjtRQUNyQixNQUFNLE9BQU8sR0FBRyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLElBQUk7WUFDZCxHQUFHLE9BQU87WUFDVixjQUFjLEVBQUU7Z0JBQ2QsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsSUFBSSxFQUFF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