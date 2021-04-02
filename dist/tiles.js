"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTileData = void 0;
const fs_1 = __importDefault(require("fs"));
// const exampleTileJSON = {
//   imageName: "tile_0028.png", //grass
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
    return fs_1.default.readdirSync("images").map((file) => {
        // console.log(file);
        const sockets = getSocketsFromImageName(file);
        return {
            imageSrc: file,
            ...sockets,
        };
    });
}
exports.getAllTileData = getAllTileData;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvc2VydmVyL3RpbGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDRDQUFvQjtBQUVwQiw0QkFBNEI7QUFDNUIsd0NBQXdDO0FBQ3hDLDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCLDRCQUE0QjtBQUM1QixzQkFBc0I7QUFDdEIsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLE9BQU87QUFDUCxLQUFLO0FBRUwsa0JBQWtCO0FBRWxCLElBQUssVUFNSjtBQU5ELFdBQUssVUFBVTtJQUNiLDZDQUFTLENBQUE7SUFDVCwyREFBZ0IsQ0FBQTtJQUNoQiwyREFBZ0IsQ0FBQTtJQUNoQiwyRUFBb0IsQ0FBQTtJQUNwQix1RkFBMEIsQ0FBQTtBQUM1QixDQUFDLEVBTkksVUFBVSxLQUFWLFVBQVUsUUFNZDtBQVVELFNBQWdCLGNBQWM7SUFDNUIsT0FBTyxZQUFFLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQzNDLHFCQUFxQjtRQUNyQixNQUFNLE9BQU8sR0FBRyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLElBQUk7WUFDZCxHQUFHLE9BQU87U0FDWCxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBVEQsd0NBU0M7QUFFRCxTQUFTLHVCQUF1QixDQUFDLFNBQWlCO0lBQ2hELFFBQVEsU0FBUyxFQUFFO1FBQ2pCLEtBQUssZUFBZTtZQUNsQixPQUFPO2dCQUNMLElBQUksRUFBRSxVQUFVLENBQUMsWUFBWTtnQkFDN0IsSUFBSSxFQUFFLFVBQVUsQ0FBQyxZQUFZO2dCQUM3QixJQUFJLEVBQUUsVUFBVSxDQUFDLFlBQVk7Z0JBQzdCLElBQUksRUFBRSxVQUFVLENB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