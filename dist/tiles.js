"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTileData = exports.defaultTile = void 0;
exports.defaultTile = "images/simpleTileset/Grass/tile_0028.png";
var SocketType;
(function (SocketType) {
    SocketType[SocketType["Grass"] = 0] = "Grass";
    SocketType[SocketType["PurePavement"] = 1] = "PurePavement";
    SocketType[SocketType["PavementEdge"] = 2] = "PavementEdge";
})(SocketType || (SocketType = {}));
function getAllTileData() {
    const grassTile = {
        imageSrc: "tile_0028.png",
        posX: SocketType.Grass,
        negX: SocketType.Grass,
        posY: SocketType.Grass,
        negY: SocketType.Grass,
    };
    return [grassTile];
}
exports.getAllTileData = getAllTileData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvc2VydmVyL3RpbGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsV0FBVyxHQUFXLDBDQUEwQyxDQUFDO0FBRTlFLElBQUssVUFJSjtBQUpELFdBQUssVUFBVTtJQUNiLDZDQUFTLENBQUE7SUFDVCwyREFBZ0IsQ0FBQTtJQUNoQiwyREFBWSxDQUFBO0FBQ2QsQ0FBQyxFQUpJLFVBQVUsS0FBVixVQUFVLFFBSWQ7QUEwQkQsU0FBZ0IsY0FBYztJQUM1QixNQUFNLFNBQVMsR0FBYTtRQUMxQixRQUFRLEVBQUUsZUFBZTtRQUN6QixJQUFJLEVBQUUsVUFBVSxDQUFDLEtBQUs7UUFDdEIsSUFBSSxFQUFFLFVBQVUsQ0FBQyxLQUFLO1FBQ3RCLElBQUksRUFBRSxVQUFVLENBQUMsS0FBSztRQUN0QixJQUFJLEVBQUUsVUFBVSxDQUFDLEtBQUs7S0FDdkIsQ0FBQztJQUVGLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNyQixDQUFDO0FBVkQsd0NBVUMifQ==