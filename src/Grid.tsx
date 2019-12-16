import React from 'react';
import styled, { css, StyledComponent } from 'styled-components';
import Snake from './Snake';
import { Clock } from './Clock';

const GridShell: StyledComponent<'div', Props, Props, never> = styled.div`
    height: 100%;
    width: 60%;
    margin: 0 auto;
    display: grid;
    grid-template-rows: ${props =>
        css`repeat(${(props as any).width}, 1fr)`};
    grid-template-columns: ${props =>
        css`repeat(${(props as any).height}, 1fr)`};
    border: 5px solid black;
    box-sizing: border-box;
`

interface Props {
    width?: number;
    height?: number;
}

export const GridContext = React.createContext({ width:1, height:1 });
export const Grid: React.FC<Props> = ({ width = 50, height = 50 }) => {
    return (
        <GridContext.Provider value={{width, height}}>
            <GridShell width={width} height={height}>
                <Snake />
            </GridShell>
        </GridContext.Provider>
    )
}