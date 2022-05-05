import { CSSProperties, ReactNode } from "react";

import {
    Container,
} from './styles';

interface FooterProps {
    children: ReactNode;
    style?: CSSProperties;
}

export function Footer({
    children,
    style
}: FooterProps) {
    return (
        <Container
            style={style}
        >
            {children}
        </Container>
    )
}

