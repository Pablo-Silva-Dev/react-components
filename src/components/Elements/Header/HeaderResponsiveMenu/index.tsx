import { CSSProperties, useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { useTheme } from 'styled-components';
import { Container } from './styles';

interface HeaderResponsiveMenuProps {
    openResponsiveMenu: () => void;
    responsiveMenuContainerStyle?: CSSProperties;
    responsiveMenuContainerClassName?: string;
}

export function HeaderResponsiveMenu({
    openResponsiveMenu,
    responsiveMenuContainerStyle,
    responsiveMenuContainerClassName
}: HeaderResponsiveMenuProps) {

    const theme = useTheme()

    return (
        <Container
            style={responsiveMenuContainerStyle}
            className={responsiveMenuContainerClassName}
        >
            <MdMenu
                color={theme.colors.secondary}
                onClick={openResponsiveMenu}
                size={32}
                style={{
                    cursor: 'pointer'
                }}
            />
        </Container>
    )
}