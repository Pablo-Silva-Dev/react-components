import { CSSProperties, ReactNode } from 'react';
import ReactLoading from 'react-loading';
import { useTheme } from 'styled-components';
import { Container, ContentContainer } from './styles';

interface PrimaryButtonProps {
    title: string;
    disabled?: boolean;
    loading?: boolean;
    onClick: () => void;
    size?: "tiny" | "small" | "medium" | "large";
    style?: CSSProperties;
    className?: string;
    icon?: ReactNode;
}

export function PrimaryButton({
    title,
    onClick,
    disabled,
    loading,
    icon,
    style,
    size,
    className,
}: PrimaryButtonProps) {

    const theme = useTheme()

    return (
        <Container
            onClick={onClick}
            disabled={disabled}
            style={style}
            className={className}
            size={size}
        >
            
            {loading ?
                <ReactLoading
                    type='bubbles'
                    color={theme.colors.white}
                    height={40}
                    width={40}
                />
                :
                <ContentContainer>
                    {icon && icon} {title}
                </ContentContainer>
            }

        </Container>
    )
}