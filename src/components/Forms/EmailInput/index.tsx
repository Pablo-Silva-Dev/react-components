import { CSSProperties, InputHTMLAttributes, ReactNode } from 'react';
import { Container, Input, IconContainer } from './styles';
import { FiMail } from 'react-icons/fi'

interface Props { }

export interface EmailInputProps extends InputHTMLAttributes<Props> {
    showsIcon?: boolean;
    inputStyle?: CSSProperties;
    inputClassName?: string;
    iconStyle?: CSSProperties;
    iconClassName?: string;
    children?: ReactNode;
}

export function EmailInput({
    showsIcon,
    iconStyle,
    iconClassName,
    inputClassName,
    inputStyle,
    children,
    ...rest
}: EmailInputProps) {
    return (
        <Container>
            {showsIcon &&
                <IconContainer

                >
                    {
                        children
                            ?
                            children
                            :
                            <FiMail
                                style={iconStyle}
                                className={iconClassName}
                            />
                    }
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