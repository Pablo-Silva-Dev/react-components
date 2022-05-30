import { CSSProperties } from 'react';
import { MdClose } from 'react-icons/md'
import { useTheme } from 'styled-components'

import {
    CloseMenuButton,
    Container,
    MenuContainer,
    MenuItem
} from './styles';

interface ResponsiveMenuProps {
    direction: 'vertical' | 'horizontal'
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
    style?: CSSProperties;
    buttonStyle?: CSSProperties;
    toggleResponsiveMenu: () => void
}

export function ResponsiveMenu({
    direction,
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
    toggleResponsiveMenu,
    style,
    buttonStyle,
    linkStyle
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
                {firstUrlLink &&
                    <MenuItem
                        href={firstUrlLink}
                        onClick={toggleResponsiveMenu}
                        style={linkStyle}
                    >
                        {firstUrlTitle}
                    </MenuItem>
                }
                {secondUrlLink &&
                    <MenuItem
                        href={secondUrlLink}
                        onClick={toggleResponsiveMenu}
                        style={linkStyle}
                    >
                        {secondUrlTitle}
                    </MenuItem>
                }
                {thirdUrlLink &&
                    <MenuItem
                        href={thirdUrlLink}
                        onClick={toggleResponsiveMenu}
                        style={linkStyle}
                    >
                        {thirdUrlTitle}
                    </MenuItem>
                }
                {fourthUrlLink &&
                    <MenuItem
                        href={fourthUrlLink}
                        onClick={toggleResponsiveMenu}
                        style={linkStyle}
                    >
                        {fourthUrlTitle}
                    </MenuItem>
                }
                {fivethUrlLink &&
                    <MenuItem
                        href={fivethUrlLink}
                        onClick={toggleResponsiveMenu}
                        style={linkStyle}
                    >
                        {fivethUrlTitle}
                    </MenuItem>
                }
                {sixthUrlLink &&
                    <MenuItem
                        href={sixthUrlLink}
                        onClick={toggleResponsiveMenu}
                        style={linkStyle}
                    >
                        {sixthUrlTitle}
                    </MenuItem>
                }
            </MenuContainer>
        </Container>
    )
}