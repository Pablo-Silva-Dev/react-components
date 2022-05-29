import { CSSProperties, ReactNode } from 'react';

import {
    Container,
    TitleCard,
    TextCard,
    IconsContainer
} from './styles';

interface DisplayInfoProps {
    title: string;
    content: string;
    children?: ReactNode;
    openUrl?: (url: string) => void;
    style?: CSSProperties;
    className?: string;
}

export function DisplayInfo({
    title,
    content,
    openUrl,
    children,
    style
}: DisplayInfoProps) {
    return (
        <Container
            onClick={() => openUrl('url')}
            style={style}
            data-testid='DisplayInfo-id'
        >
            <TitleCard>{title}</TitleCard>
            <TextCard>{content}</TextCard>
            <IconsContainer>
                {children}
            </IconsContainer>
        </Container>
    )
}