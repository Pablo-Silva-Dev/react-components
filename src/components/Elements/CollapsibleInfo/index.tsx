import React, { CSSProperties } from 'react';
import { CollapsibleTrigger, Container, Text } from './styles';

interface CollapsibleInfoProps {
    title: string;
    content: string;
    titleStyle?: CSSProperties;
    contentStyle?: CSSProperties;
}

export function CollapsibleInfo({
    title,
    content,
    titleStyle,
    contentStyle
}: CollapsibleInfoProps) {
    return (
        <CollapsibleTrigger
            trigger={title}
            transitionTime={200}
            triggerStyle={titleStyle}
        >
            <Container>
                <Text
                    style={contentStyle}
                >
                    {content}
                </Text>
            </Container>
        </CollapsibleTrigger>
    )
}