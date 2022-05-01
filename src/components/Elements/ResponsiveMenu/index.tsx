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
    closeResponsiveMenu: () => void
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
    closeResponsiveMenu,
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
                        onClick={closeResponsiveMenu}
                        size={32}
                        color={theme.colors.white}
                        role='dialog'
                    />
                </CloseMenuButton>
                {firstUrlLink &&
                    <MenuItem
                        href={firstUrlLink}
                        onClick={closeResponsiveMenu}
                        style={linkStyle}
                    >
                        {firstUrlTitle}
                    </MenuItem>
                }
                {secondUrlLink &&
                    <MenuItem
                        href={secondUrlLink}
                        onClick={closeResponsiveMenu}
                        style={linkStyle}
                    >
                        {secondUrlTitle}
                    </MenuItem>
                }
                {thirdUrlLink &&
                    <MenuItem
                        href={thirdUrlLink}
                        onClick={closeResponsiveMenu}
                        style={linkStyle}
                    >
                        {thirdUrlTitle}
                    </MenuItem>
                }
                {fourthUrlLink &&
                    <MenuItem
                        href={fourthUrlLink}
                        onClick={closeResponsiveMenu}
                        style={linkStyle}
                    >
                        {fourthUrlTitle}
                    </MenuItem>
                }
                {fivethUrlLink &&
                    <MenuItem
                        href={fivethUrlLink}
                        onClick={closeResponsiveMenu}
                        style={linkStyle}
                    >
                        {fivethUrlTitle}
                    </MenuItem>
                }
                {sixthUrlLink &&
                    <MenuItem
                        href={sixthUrlLink}
                        onClick={closeResponsiveMenu}
                        style={linkStyle}
                    >
                        {sixthUrlTitle}
                    </MenuItem>
                }
            </MenuContainer>
        </Container>
    )
}