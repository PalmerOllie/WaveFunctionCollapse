import fs from "fs";
import { toASCII } from "node:punycode";

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

enum SocketType {
  Grass = 0,
  PavementPure = 1,
  PavementEdge = 2,
  PavementEdgeAdjacent,
  PavementEdgeDoubleAdjacent,
}

interface NeighbourLists {
  posX: TileData[];
  negX: TileData[];
  posY: TileData[];
  negY: TileData[];
}

interface TileData {
  imageSrc: string;
  posX: SocketType;
  negX: SocketType;
  posY: SocketType;
  negY: SocketType;
  neighbourLists: NeighbourLists;
  rotationX: boolean;
  rotationY: boolean;
}

export function getAllTileData(): TileData[] {
  fs.readdirSync("./").forEach((file) => {
    console.log(file);
  });

  let tiles: TileData[] = fs.readdirSync("images").map((file) => {
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

function canSocketConnectToRotatableTile(
  socket: SocketType,
  tileData: TileData
): boolean {
  if (
    socket == tileData.posX ||
    socket == tileData.negX ||
    socket == tileData.posY ||
    socket == tileData.negY
  ) {
    return true;
  }
  return false;
}

function populateNeighboursList(tileData: TileData[]) {
  let tiles: TileData[] = [];

  tileData.forEach((t1) => {
    for (let index = 0; index < tileData.length; index++) {
      const t2 = tileData[index];

      let neighbourLists: NeighbourLists = {
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

      const newTile: TileData = {
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
