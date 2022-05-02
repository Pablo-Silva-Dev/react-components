import React, { CSSProperties, InputHTMLAttributes, ReactNode } from 'react';
import { Container, Input, IconContainer } from './styles';
import { FiMail } from 'react-icons/fi'

interface Props { }

export interface EmailInputProps extends InputHTMLAttributes<Props> {
    iconStyle?: CSSProperties;
    showsIcon: boolean;
}

export function EmailInput({ showsIcon, iconStyle, ...rest }: EmailInputProps) {
    return (
        <Container>
            {showsIcon &&
                <IconContainer
                    style={iconStyle}
                >
                    <FiMail />
                </IconContainer>
            }
            <Input
                type='email'
                {...rest}
            />
        </Container>
    )
}