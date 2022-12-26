import styled from 'styled-components'

interface ReadPorgressBarProps {
    barHeight?: 'low' | 'medium' | 'tall'
    color?: string;
}

export const Container = styled.div<ReadPorgressBarProps>`
display: flex;

& .read-progress-bar{
    position: fixed;
    top: 0;
    right:0;
    left: 0;
    height: ${({ barHeight }) => barHeight === 'low' ?
        '4px' : barHeight === 'tall' ?
            '16px' : '8px'};
    background-color: ${({ theme, color }) => color ? color : theme.colors.primary};
    transform-origin: 0%;
}

`
