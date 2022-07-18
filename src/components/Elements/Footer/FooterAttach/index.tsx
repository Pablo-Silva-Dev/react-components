import React, { CSSProperties, ReactNode } from 'react';
import { Container } from './styles';


interface FooterAttachProps {
    children: ReactNode;
    style?: CSSProperties;
    className?: string;
}

export function FooterAttach({ children, style, className }: FooterAttachProps) {
    return (
        <Container
            style={style}
            className={className}
        >
            {children}
        </Container>
    )
}
