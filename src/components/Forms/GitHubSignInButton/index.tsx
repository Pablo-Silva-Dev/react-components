import { CSSProperties } from 'react';
import ReactLoading from 'react-loading';
import { useTheme } from 'styled-components';
import { Container, Title } from './styles';
import { GrGithub } from 'react-icons/gr'

interface GitHubSignInButtonProps {
    title: string;
    onClick: () => Promise<void>;
    disabled?: boolean;
    loading?: boolean;
    themeColor?: 'light' | 'dark',
    className?: string;
    style?: CSSProperties;
}

export function GitHubSignInButton({
    title,
    onClick,
    disabled,
    themeColor,
    loading,
    className,
    style
}: GitHubSignInButtonProps) {

    const theme = useTheme()

    return (
        <Container
            disabled={disabled}
            themeColor={themeColor}
            className={className}
            style={style}
            onClick={onClick}
            data-testid='githubSignInbutton-id'
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
                    <GrGithub
                        size={24}
                        color={
                            themeColor === 'dark' ?
                                theme.colors.white :
                                theme.colors.black
                        }
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