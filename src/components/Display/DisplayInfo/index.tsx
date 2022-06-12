import { CSSProperties, ReactNode } from 'react';

import {
    ActionCard, Container, IconsContainer, TextCard
} from './styles';

interface DisplayInfoProps {
    title: string;
    content: string;
    children?: ReactNode;
    style?: CSSProperties;
    className?: string;
}

export function DisplayInfo({
    title,
    content,
    children,
    style
}: DisplayInfoProps) {
    return (
        <Container
            style={style}
            data-testid='DisplayInfo-id'
        >
            <ActionCard>{title}</ActionCard>
            <TextCard>{content}</TextCard>
            <IconsContainer>
                {children}
            </IconsContainer>
        </Container>
    )
}