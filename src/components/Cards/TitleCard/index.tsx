import { CSSProperties } from 'react';

import {
    Container,
    Title,
    Text,
    TitleContainer,
    ContentContainer
} from './styles';

interface TitleCardProps {
    title: string;
    content: string;
    style?: CSSProperties;
}

export function TitleCard({
    title,
    content,
    style
}: TitleCardProps) {
    return (
        <Container
            style={style}
        >
            <TitleContainer>
                <Title>{title}</Title>
            </TitleContainer>
            <ContentContainer>
                <Text>{content}</Text>
            </ContentContainer>
        </Container>
    )
}