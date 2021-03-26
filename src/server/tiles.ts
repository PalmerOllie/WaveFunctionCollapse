import fs from "fs";

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

enum SocketType {
  Grass = 0,
  PavementPure = 1,
  PavementEdge = 2,
  PavementEdgeAdjacent,
}

interface TileData {
  imageSrc: string;
  posX: SocketType;
  negX: SocketType;
  posY: SocketType;
  negY: SocketType;
}

export function getAllTileData(): TileData[] {
  return fs.readdirSync("images").map((file) => {
    // console.log(file);
    const sockets = getSocketsFromImageName(file);
    return {
      imageSrc: file,
      ...sockets,
    };
  });
}

function getSocketsFromImageName(imageName: string) {
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

    default:
      return {
        posX: SocketType.Grass,
        negX: SocketType.Grass,
        posY: SocketType.Grass,
        negY: SocketType.Grass,
      };
  }
}
