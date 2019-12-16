import { Coordinate } from "./Coordinate";
import styled, { css, StyledComponent } from "styled-components";


interface StyledProps {
    coordinate: Coordinate;
}

export const BodyPart: StyledComponent<
    'div',
    StyledProps,
    StyledProps,
    never
> = styled.div`
    grid-row: ${props =>
        css`${(props as any).coordinate.y} / ${(props as any).coordinate.y +
            1}`};
    grid-column: ${props =>
        css`${(props as any).coordinate.x} / ${(props as any).coordinate.x +
            1}`};
    background-color: royalblue;
`;