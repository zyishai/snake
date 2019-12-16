import { Directions } from "./Direction";

export class Coordinate {
    x: number;
    y: number;
    widthMod: number;
    heightMod: number;

    constructor(x=1, y=1, private gridWidth=1, private gridHeight=1) {
        this.widthMod = this.gridWidth + 1;
        this.heightMod = this.gridHeight + 1;
        this.x = x % this.widthMod;
        this.y = y % this.heightMod;
    }

    move(direction: Directions): Coordinate {
        switch(direction) {
            case Directions.UP: {
                return new Coordinate(
                    this.x,
                    --this.y % this.heightMod,
                    this.gridWidth,
                    this.gridHeight
                )
            }
            case Directions.RIGHT: {
                return new Coordinate(
                    ++this.x % this.widthMod,
                    this.y,
                    this.gridWidth,
                    this.gridHeight
                )
            }
            case Directions.DOWN: {
                return new Coordinate(
                    this.x,
                    ++this.y % this.heightMod,
                    this.gridWidth,
                    this.gridHeight
                )
            }
            case Directions.LEFT: {
                return new Coordinate(
                    --this.x % this.widthMod,
                    this.y,
                    this.gridWidth,
                    this.gridHeight
                )
            }
            default: {
                return this;
            }
        }
    }
}