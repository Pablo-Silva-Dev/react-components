import { CSSProperties } from 'react';
import ReactLoading from 'react-loading';
import { useTheme } from 'styled-components';
import { Container, Title } from './styles';
import { FaFacebook } from 'react-icons/fa'

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
            data-testid='facebooksignbutton-id'
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
                    <FaFacebook
                        size={24}
                        color='#346add'
                    />
                    <Title>
                        {title}
                    </Title>
                </>
            }
        </Container>
    )
}