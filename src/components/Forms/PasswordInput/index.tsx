import React, { CSSProperties, InputHTMLAttributes } from 'react';
import { Container, Input, IconContainer } from './styles';
import { FiEyeOff, FiEye } from 'react-icons/fi'

interface Props { }

export interface PasswordInputProps extends InputHTMLAttributes<Props> {
    iconStyle?: CSSProperties;
    showsIcon: boolean;
    passwordIsVisible: boolean;
    togglePassword: () => void;
}

export function PasswordInput({
    showsIcon,
    iconStyle,
    passwordIsVisible,
    togglePassword,
    ...rest
}: PasswordInputProps) {
    return (
        <Container>
            {showsIcon &&
                <IconContainer
                    onClick={togglePassword}
                    style={iconStyle}
                >
                    {passwordIsVisible ? <FiEye /> : <FiEyeOff />}
                </IconContainer>
            }
            <Input
                type={passwordIsVisible ? 'text' : 'password'}
                {...rest}
            />
        </Container>
    )
}