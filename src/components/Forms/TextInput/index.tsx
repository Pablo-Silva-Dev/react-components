import React, { CSSProperties, InputHTMLAttributes, ReactNode } from 'react';
import { Container, Input, IconContainer } from './styles';

interface Props { }

export interface TextInputProps extends InputHTMLAttributes<Props> {
    icon?: ReactNode;
    iconStyle?: CSSProperties
}

export function TextInput({ icon, iconStyle, ...rest }: TextInputProps) {
    return (
        <Container>
            {icon &&
                <IconContainer
                    style={iconStyle}
                >
                    {icon}
                </IconContainer>
            }
            <Input
                {...rest}
            />
        </Container>
    )
}