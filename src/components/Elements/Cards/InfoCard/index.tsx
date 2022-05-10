import { CSSProperties, ReactNode } from 'react';

import {
    Container,
    TitleCard,
    TextCard,
    IconsContainer
} from './styles';

interface InfoCardProps {
    title: string;
    content: string;
    children?: ReactNode;
    openUrl?: (url: string) => void;
    style?: CSSProperties;
    className?: string;
}

export function InfoCard({
    title,
    content,
    openUrl,
    children,
    style
}: InfoCardProps) {
    return (
        <Container
            onClick={() => openUrl('url')}
            style={style}
            data-testid='infocard-id'
        >
            <TitleCard>{title}</TitleCard>
            <TextCard>{content}</TextCard>
            <IconsContainer>
                {children}
            </IconsContainer>
        </Container>
    )
}