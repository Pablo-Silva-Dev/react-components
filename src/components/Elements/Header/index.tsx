import { CSSProperties, ReactNode } from 'react';
import { MdMenu } from 'react-icons/md';
import { useTheme } from 'styled-components';
import { NextLink } from '../../Next/NextLink';
import { Logo } from '../Logo';
import { UserAuthentication } from '../UserAuthentication';
import {
    AuthenticationContainer,
    Container,
    LinksContainer,
    LogoContainer,
    ResponsiveMenuContainer
} from './styles';


interface HeaderProps {
    firstUrlTitle?: string;
    secondUrlTitle?: string;
    thirdUrlTitle?: string;
    fourthUrlTitle?: string;
    fivethUrlTitle?: string;
    sixthUrlTitle?: string;
    firstUrlLink?: string;
    secondUrlLink?: string;
    thirdUrlLink?: string;
    fourthUrlLink?: string;
    fivethUrlLink?: string;
    sixthUrlLink?: string;
    linkStyle?: CSSProperties;
    logoImagePath: string;
    logoImageAlt: string;
    logoImageSize?: "small" | "medium" | "large";
    logoImageStyle?: CSSProperties;
    authenticationRedirectPath?: string;
    authenticationImageAlt?: string;
    openResponsiveMenu: () => void;
    showsAuthenticationContainer?: boolean;
    style?: CSSProperties;
}

export function Header({
    firstUrlLink,
    secondUrlLink,
    thirdUrlLink,
    fourthUrlLink,
    fivethUrlLink,
    sixthUrlLink,
    firstUrlTitle,
    secondUrlTitle,
    thirdUrlTitle,
    fourthUrlTitle,
    fivethUrlTitle,
    sixthUrlTitle,
    linkStyle,
    logoImagePath,
    logoImageAlt,
    logoImageSize,
    logoImageStyle,
    authenticationImageAlt,
    authenticationRedirectPath,
    openResponsiveMenu,
    showsAuthenticationContainer,
    style
}: HeaderProps) {

    const theme = useTheme()

    return (
        <Container
            style={style}
        >
            <ResponsiveMenuContainer>
                <MdMenu
                    color={theme.colors.secondary}
                    onClick={openResponsiveMenu}
                    size={32}
                    style={{
                        cursor: 'pointer'
                    }}
                />
            </ResponsiveMenuContainer>
            <LogoContainer>
                <Logo
                    imageUrl={logoImagePath}
                    imgAlt={logoImageAlt}
                    size={logoImageSize}
                    style={logoImageStyle}
                />
            </LogoContainer>
            <LinksContainer>
                {firstUrlLink &&
                    <NextLink
                        title={firstUrlTitle}
                        url={firstUrlLink}
                        style={linkStyle}
                    />
                }
                {secondUrlLink &&
                    <NextLink
                        title={secondUrlTitle}
                        url={secondUrlLink}
                        style={linkStyle}
                    />
                }
                {thirdUrlLink &&
                    <NextLink
                        title={thirdUrlTitle}
                        url={thirdUrlLink}
                        style={linkStyle}
                    />
                }
                {fourthUrlLink &&
                    <NextLink
                        title={fourthUrlTitle}
                        url={fourthUrlLink}
                        style={linkStyle}
                    />
                }
                {fivethUrlLink &&
                    <NextLink
                        title={fivethUrlTitle}
                        url={fivethUrlLink}
                        style={linkStyle}
                    />
                }
                {sixthUrlLink &&
                    <NextLink
                        title={sixthUrlTitle}
                        url={sixthUrlLink}
                        style={linkStyle}
                    />
                }

            </LinksContainer>
            {showsAuthenticationContainer &&
                <AuthenticationContainer>
                    <UserAuthentication
                        redirectPath={authenticationRedirectPath}
                        imageAlt={authenticationImageAlt}
                    />
                </AuthenticationContainer>
            }
        </Container>
    )
}