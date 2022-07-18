import React, { CSSProperties } from 'react';
import { Container } from './styles';

interface DividerProps {
    style?: CSSProperties;
    className?: string;
}

export function Divider({ style, className }: DividerProps) {
    return (
        <Container
            style={style}
            className={className}
            data-testid='divider'
        />
    )
}
