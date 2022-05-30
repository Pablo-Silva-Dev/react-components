import { CSSProperties } from 'react';
import ReactLoading from 'react-loading';
import { useTheme } from 'styled-components';
import { Container } from './styles';

interface SecondaryButtonProps {
    title: string;
    disabled?: boolean;
    loading?: boolean;
    onClick: () => void;
    size?: "tiny" | "small" | "medium" | "large";
    style?: CSSProperties;
    className?: string;
}

export function SecondaryButton({
    title,
    onClick,
    disabled,
    loading,
    style,
    size,
    className,
}: SecondaryButtonProps) {

    const theme = useTheme()

    return (
        <Container
            onClick={onClick}
            disabled={disabled}
            style={style}
            size={size}
            className={className}
        >
            {loading ?
                <ReactLoading
                    type='bubbles'
                    color={theme.colors.primary_light}
                    height={40}
                    width={40}
                />
                :
                title
            }
        </Container>
    )
}