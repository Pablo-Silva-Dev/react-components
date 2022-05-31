import { CSSProperties, ReactNode } from 'react';
import { MdClose } from 'react-icons/md'
import { useTheme } from 'styled-components'
import { NextLink } from '../../Next/NextLink';

import {
    CloseMenuButton,
    Container,
    MenuContainer,
    MenuItem
} from './styles';

interface ResponsiveMenuProps {
    toggleResponsiveMenu: () => void
    direction?: 'top' | 'right' | 'left'
    children?: ReactNode;
    style?: CSSProperties;
    className?: string;
    buttonStyle?: CSSProperties;
    buttonClassName?: string;
    menuStyle?: CSSProperties;
    menuClassName?: string;
}

export function ResponsiveMenu({
    direction = 'top',
    toggleResponsiveMenu,
    children,
    style,
    buttonStyle,
}: ResponsiveMenuProps) {

    const theme = useTheme()

    return (
        <Container
            direction={direction}
            role='menu'
        >
            <MenuContainer
                style={style}
            >
                <CloseMenuButton
                    style={buttonStyle}
                >
                    <MdClose
                        onClick={toggleResponsiveMenu}
                        size={32}
                        color={theme.colors.white}
                        role='dialog'
                    />
                </CloseMenuButton>
                {children}
            </MenuContainer>
        </Container>
    )
}