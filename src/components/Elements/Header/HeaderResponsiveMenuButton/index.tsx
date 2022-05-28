import { CSSProperties, useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { Container } from './styles';

interface HeaderResponsiveMenuButtonProps {
    openResponsiveMenu: () => void;
    responsiveMenuContainerStyle?: CSSProperties;
    responsiveMenuContainerClassName?: string;
    responsiveMenuIconStyle?: CSSProperties;
    responsiveMenuIconClassName?: string;
}

export function HeaderResponsiveMenuButton({
    openResponsiveMenu,
    responsiveMenuContainerStyle,
    responsiveMenuContainerClassName,
    responsiveMenuIconStyle,
    responsiveMenuIconClassName
}: HeaderResponsiveMenuButtonProps) {

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
                data-testid='HeaderResponsiveMenuButton-id'
            />
        </Container>
    )
}