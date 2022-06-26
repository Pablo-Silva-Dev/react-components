import { ReactElement } from 'react';
import styled, { keyframes } from 'styled-components'

interface SoftSliderProps {
    animationSpeed?: number
    children: ReactElement[]
}

const scroll = keyframes`
0% {transform: translateX(0)};
100%{transform: translateX(calc(-250px * 7));
`;

export const Container = styled.div`
height: 100%;
margin: auto;
overflow: hidden;
position: relative;
background: transparent;
padding: 16px;
width: 100%;
    &::before, &::after{
    content: "";
    height: 100%;
    position: absolute;
    width: 200px;
    z-index: 2;
    background: linear-gradient(to right, rgba(255, 255, 255, 1) 
    0%, rgba(255, 255, 255, 0) 100%);
}

    &::after{
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
}

    &::before{
    left: 0;
    top: 0;
}
`
export const SubContainer = styled.div<SoftSliderProps>`
animation: ${scroll} ${({ animationSpeed }) => animationSpeed ? `${animationSpeed}s` : '40s'} linear infinite;
display: flex;

width: ${({children}) => `calc(250px * ${children.length})`};
`
export const ContentContainer = styled.div`
height: 100%;
width: 250px;
padding-left: 20px;
margin-bottom: -8px;
`

//WORKS FINE WITH 14 ELEMENTS?


