import { CSSProperties } from 'react';
import ReactLoading from 'react-loading';
import { useTheme } from 'styled-components';
import { Container } from './styles';
import { GrFacebook } from 'react-icons/gr'

interface FacebookSignButtonProps {
    title: string;
    onClick: () => Promise<void>;
    disabled?: boolean;
    loading?: boolean;
    themeColor?: 'dark' | 'light',
    className?: string;
    style?: CSSProperties;
}

export function FacebookSignButton({
    title,
    onClick,
    disabled,
    themeColor,
    loading,
    className,
    style
}: FacebookSignButtonProps) {

    const theme = useTheme()

    return (
        <Container
            disabled={disabled}
            themeColor={themeColor}
            className={className}
            style={style}
            onClick={onClick}
        >
            {loading ?
                <ReactLoading
                    type='bubbles'
                    color={theme.colors.white}
                    height={40}
                    width={40}
                    data-testid='submit-button-children-test-id'
                />
                :
                <>
                    <GrFacebook
                        size={24}
                        color='#3b5998'
                    />
                    {title}
                </>
            }
        </Container>
    )
}