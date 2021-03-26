export const defaultTile: string = "images/simpleTileset/Grass/tile_0028.png";

enum SocketType {
  Grass = 0,
  PurePavement = 1,
  PavementEdge,
}

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

interface TileData {
  imageSrc: string;
  posX: SocketType;
  negX: SocketType;
  posY: SocketType;
  negY: SocketType;
}

export function getAllTileData(): TileData[] {
  const grassTile: TileData = {
    imageSrc: "tile_0028.png",
    posX: SocketType.Grass,
    negX: SocketType.Grass,
    posY: SocketType.Grass,
    negY: SocketType.Grass,
  };

  return [grassTile];
}
