import { Coordinate } from '../Coordinate';

// interface Coordinate {
//     x: number;
//     y: number;
//     gridWidth: number;
//     gridHeight: number;
//     widthMod: number;
//     heightMod: number;

//     new(x?:number, y?:number, gridWidth?:number, gridHeight?:number): Coordinate;
//     move(d: Directions): Coordinate;
// }

export enum Directions {
    UP = 38,
    RIGHT = 39,
    DOWN = 40,
    LEFT = 37
}

export interface SnakeProps {
    size?: number
}

interface SnakeReducerInitData {
    size: number
    width: number
    height: number
    startX?: number
    startY?: number
    direction?: Directions
}

interface SnakeState {
    direction: Directions
    body: Array<[Coordinate, Directions]>
}

interface SnakeReducerAction {
    type: string
    payload?: any
}
