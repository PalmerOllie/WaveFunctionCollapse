export enum SocketType {
  Grass = 0,
  PurePavement = 1,
  PavementEdge,
}

export interface NeighbourLists {
  posX: TileData[];
  negX: TileData[];
  posY: TileData[];
  negY: TileData[];
}

export interface TileData {
  imageSrc: string;
  posX: SocketType;
  negX: SocketType;
  posY: SocketType;
  negY: SocketType;
  neighbourLists: NeighbourLists;
  rotationX: boolean;
  rotationY: boolean;
}
