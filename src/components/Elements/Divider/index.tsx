import React, { CSSProperties } from 'react';
import { Container } from './styles';


interface Divider {
    style?: CSSProperties;
    className?: string;
}

export function Divider({ style, className }: Divider) {
    return (
        <Container
            style={style}
            className={className}
            data-testid='divider'
        />
    )
}