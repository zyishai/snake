import React, { useEffect, useContext, useState, useRef, useReducer } from 'react';
import { Coordinate } from './Coordinate';
import { BodyPart } from './SnakeBodyPart';
import { GridContext } from './Grid';
import { Directions, SnakeReducerInitData, SnakeState, SnakeReducerAction, SnakeProps } from './types/Snake';

const init = ({ size, width, height, startX=4, startY=4, direction=Directions.RIGHT }: SnakeReducerInitData): SnakeState => ({
    direction,
    body: Array.from(new Array(size)).map(() => [
        new Coordinate(startX--, startY, width, height),
        direction
    ])
});

function reducer(state: SnakeState, action: SnakeReducerAction) {
    return state;
}

const Snake: React.FC<SnakeProps> = ({ size=8 }) => {
    const { width, height } = useContext(GridContext);
    const [{direction, body}, dispatch] = useReducer<React.Reducer<SnakeState, any>, SnakeReducerInitData>(reducer, { size, width, height }, init);

    return (
        <>
            {
                body.map(([c], idx) => (
                    <BodyPart key={c.x + ' ' + c.y + ' ' + idx} coordinate={c} />
                ))
            }
        </>
    );
}

export default Snake;