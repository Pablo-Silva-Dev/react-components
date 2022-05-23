import { CSSProperties, useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { Container } from './styles';

interface HeaderResponsiveMenuProps {
    openResponsiveMenu: () => void;
    responsiveMenuContainerStyle?: CSSProperties;
    responsiveMenuContainerClassName?: string;
    responsiveMenuIconStyle?: CSSProperties;
    responsiveMenuIconClassName?: string;
}

export function HeaderResponsiveMenu({
    openResponsiveMenu,
    responsiveMenuContainerStyle,
    responsiveMenuContainerClassName,
    responsiveMenuIconStyle,
    responsiveMenuIconClassName
}: HeaderResponsiveMenuProps) {

    return (
        <Container
            style={responsiveMenuContainerStyle}
            className={responsiveMenuContainerClassName}
        >
            <MdMenu
                onClick={openResponsiveMenu}
                size={32}
                style={responsiveMenuIconStyle}
                className={responsiveMenuIconClassName}
            />
        </Container>
    )
}