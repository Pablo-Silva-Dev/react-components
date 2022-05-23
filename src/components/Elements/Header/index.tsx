import { CSSProperties, ReactNode } from "react";
import { Container, } from './styles';

interface HeaderProps {
    children: ReactNode;
    style?: CSSProperties;
    className?: string;
}

export function Header({
    children,
    style,
    className
}: HeaderProps) {
    return (
        <Container
            style={style}
            className={className}
        >
            {children}
        </Container>
    )
}



/* import { CSSProperties, ReactNode } from 'react';
import { MdMenu } from 'react-icons/md';
import { useTheme } from 'styled-components';
import { Logo } from '../Logo';
import { HeaderLink } from './HeaderLink';
import { UserAuthentication } from '../UserAuthentication';
import {
    AuthenticationContainer,
    Container,
    ResponsiveMenuContainer
} from './styles';
import { HeaderLogoContainer } from './HeaderLogoContainer';
import { HeaderLinksContainer } from './HeaderLinksContainer';


export function Header({
    logoImagePath,
    logoImageAlt,
    logoImageSize,
    logoImageStyle,
    openResponsiveMenu,
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
            <HeaderLogoContainer>
                <Logo
                    imageUrl={logoImagePath}
                    imgAlt={logoImageAlt}
                    size={logoImageSize}
                    style={logoImageStyle}
                />
            </HeaderLogoContainer>
            <HeaderLinksContainer>
                <HeaderLink
                    content='Home'
                    url='/'
                />
                <HeaderLink
                    content='Hosdfsdfme'
                    url='/'
                />
                <HeaderLink
                    content='Home'
                    url='/'
                />
                <HeaderLink
                    content='Hosdfffffffffsdfme'
                    url='/'
                />
                <HeaderLink
                    content='Home'
                    url='/'
                />
                <HeaderLink
                    content='Hosdfffffffffsdfme'
                    url='/'
                />
                <HeaderLink
                    content='Home'
                    url='/'
                />

            </HeaderLinksContainer>
        </Container>
    )
} */