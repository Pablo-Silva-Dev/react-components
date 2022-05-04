import { CSSProperties, ReactNode } from 'react';

import {
    Container,
    TitleCard,
    TextCard,
    IconsContainer
} from './styles';

interface CardInfoProps {
    title: string;
    content: string;
    children?: ReactNode;
    url?: string;
    style?: CSSProperties;
    className?: string;
}

export function CardInfo({
    title,
    content,
    url,
    children,
    style
}: CardInfoProps) {
    return (
        <Container
            onClick={() => window.location.href = url}
            style={style}
        >
            <TitleCard>{title}</TitleCard>
            <TextCard>{content}</TextCard>
            <IconsContainer>
                {children}
            </IconsContainer>
        </Container>
    )
}