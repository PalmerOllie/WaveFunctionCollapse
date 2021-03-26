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
  PavementEdgeDoubleAdjacent,
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

    case "tile_0036.png" ||
      "tile_0117.png" ||
      "tile_0913.png" ||
      "tile_0914.png":
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
