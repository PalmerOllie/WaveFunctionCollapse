import { assert } from "node:console";
import { TileData } from "./tileTypes";

//Load prototype date

//Initialise 2D array of cells (each cell has list of possible Tiles)

//While not collapsed (no superpositions left)

//Iterate
//  - find lowest cell entropy
//  - collapse at this cell
//  - propogate changes
//    - add changed cell to stack
//    - check neighbours
//    - update superpositions of these neighbours if needed
//    - if did, add these cells to stack
//    - keep going until stack empty
interface Cell {
  possibilities: TileData[];
}

const gridHeight = 7;
const gridLength = 7;
let map: Cell[][];

export function WFC(allTiles: TileData[]): TileData[] {
  console.log(allTiles[0].imageSrc);

  return mapToTileGrid(map);
}

function lowestCellEntropy() {
  for (let i = 0; i < map[0].length; i++) break;
}

//Returns final collapsed Tile map as 1D array
function mapToTileGrid(map: Cell[][]): TileData[] {
  let tileArray: TileData[] = [];

  map.forEach((row: Cell[]) => {
    row.forEach((cell: Cell) => {
      assert(
        cell.possibilities.length == 1,
        "Mapping tile to grid when superpositions still exist."
      );
      tileArray.push(cell.possibilities[0]);
    });
  });

  return tileArray;
}
