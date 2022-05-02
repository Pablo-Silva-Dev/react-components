import React, { InputHTMLAttributes, ReactNode } from 'react';
import { Container, Input, IconContainer } from './styles';

interface Props { }

export interface TextInputProps extends InputHTMLAttributes<Props> {
    icon?: ReactNode
}

export function TextInput({ icon, ...rest }: TextInputProps) {
    return (
        <Container>
            {icon &&
                <IconContainer>
                    {icon}
                </IconContainer>
            }
            <Input
                {...rest}
            />
        </Container>
    )
}