import React, { ReactNode } from 'react';
import { Container } from './styles';


interface NavProps {
    children: ReactNode;
}

export function Nav({ children }: NavProps) {
    return (
        <Container>
            {children}
        </Container>
    )
}