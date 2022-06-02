import { CSSProperties } from 'react';
import ReactLoading, { LoadingProps } from 'react-loading';
import { useTheme } from 'styled-components';
import { Container, Title } from './styles';
import { FaGithub } from 'react-icons/fa'

interface GithubSignInButtonProps {
    title: string;
    onClick: () => Promise<void>;
    disabled?: boolean;
    loading?: boolean;
    themeColor?: 'dark' | 'light';
    animationType?: LoadingProps['type'];
    className?: string;
    style?: CSSProperties;
}

export function GithubSignInButton({
    title,
    onClick,
    disabled,
    themeColor,
    animationType,
    loading,
    className,
    style
}: GithubSignInButtonProps) {

    const theme = useTheme()

    return (
        <Container
            disabled={disabled}
            themeColor={themeColor}
            className={className}
            style={style}
            onClick={onClick}
            data-testid='GithubSignInbutton-id'
        >
            {loading ?
                <ReactLoading
                    type={animationType ? animationType : 'bubbles'}
                    color={themeColor === 'dark' ? theme.colors.white : theme.colors.primary}
                    height={36}
                    width={36}
                    data-testid='submit-button-children-test-id'
                />
                :
                <>
                    <FaGithub
                        size={24}
                        color='#a0a0a0'
                    />
                    <Title
                        themeColor={themeColor}
                    >
                        {title}
                    </Title>
                </>
            }
        </Container>
    )
}