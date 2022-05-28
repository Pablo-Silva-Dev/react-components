import React, { CSSProperties, ReactNode } from 'react';
import {
    Container,
    ContentContainer,
    TitleContainer,
    Text,
    Title
} from './styles';

interface GroupInfoProps {
    children?: ReactNode;
    title: string;
    content?: string;
    style?: CSSProperties;
    titleStyle?: CSSProperties;
    contentStyle?: CSSProperties;
}

export function GroupInfo({
    children,
    title,
    content,
    style,
    titleStyle,
    contentStyle
}: GroupInfoProps) {
    return (
        <Container
            style={style}
        >
            <TitleContainer>
                {children}
                <Title
                    style={titleStyle}
                >{title}
                </Title>
            </TitleContainer>
            {content &&
                <ContentContainer>
                    <Text
                        style={contentStyle}
                    >
                        {content}
                    </Text>
                </ContentContainer>
            }
        </Container>
    )
}