import { CSSProperties } from 'react';
import ReactLoading from 'react-loading';
import { useTheme } from 'styled-components';
import { Container, Title } from './styles';
import { GrGithub } from 'react-icons/gr'

interface GitHubSignButtonProps {
    title: string;
    onClick: () => Promise<void>;
    disabled?: boolean;
    loading?: boolean;
    themeColor?: 'dark' | 'light',
    className?: string;
    style?: CSSProperties;
}

export function GitHubSignButton({
    title,
    onClick,
    disabled,
    themeColor,
    loading,
    className,
    style
}: GitHubSignButtonProps) {

    const theme = useTheme()

    return (
        <Container
            disabled={disabled}
            themeColor={themeColor}
            className={className}
            style={style}
            onClick={onClick}
            data-testid='githubsignbutton-id'
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
                    />
                    <Title>
                        {title}
                    </Title>
                </>
            }
        </Container>
    )
}