import { CSSProperties, InputHTMLAttributes, ReactNode } from 'react';
import { FiMail } from 'react-icons/fi';
import { Container, IconContainer, Input } from './styles';

interface Props { }

export interface EmailInputProps extends InputHTMLAttributes<Props> {
    showsIcon?: boolean;
    inputStyle?: CSSProperties;
    inputClassName?: string;
    iconStyle?: CSSProperties;
    iconClassName?: string;
    icon?: ReactNode;
}

export function EmailInput({
    showsIcon,
    inputClassName,
    inputStyle,
    icon,
    ...rest
}: EmailInputProps) {
    return (
        <Container>
            {showsIcon &&
                <IconContainer

                >
                    {icon && icon}
                </IconContainer>
            }
            <Input
                style={inputStyle}
                className={inputClassName}
                type='email'
                required
                {...rest}
            />
        </Container>
    )
}