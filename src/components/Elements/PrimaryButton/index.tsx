import { CSSProperties } from 'react';
import ReactLoading from 'react-loading';
import { useTheme } from 'styled-components';
import { Container } from './styles';

interface PrimaryButtonProps {
    title: string;
    disabled?: boolean;
    loading?: boolean;
    onClick: () => void;
    style?: CSSProperties;
}

export function PrimaryButton({
    title,
    disabled,
    loading,
    style,
    onClick
}: PrimaryButtonProps) {

    const theme = useTheme()

    return (
        <Container
            onClick={onClick}
            disabled={disabled}
            style={style}
        >
            {loading ?
                <ReactLoading
                    type='bubbles'
                    color={theme.colors.white}
                    height={40}
                    width={40}
                />
                :
                title
            }
        </Container>
    )
}