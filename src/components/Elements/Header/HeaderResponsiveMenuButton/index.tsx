import { CSSProperties, useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { Container } from './styles';

interface HeaderResponsiveMenuButtonProps {
    toggleResponsiveMenu: () => void;
    containerStyle?: CSSProperties;
    containerClassName?: string;
    iconStyle?: CSSProperties;
    iconClassName?: string;
}

export function HeaderResponsiveMenuButton({
    toggleResponsiveMenu,
    containerStyle,
    containerClassName,
    iconStyle,
    iconClassName
}: HeaderResponsiveMenuButtonProps) {

    return (
        <Container
            style={containerStyle}
            className={containerClassName}
        >
            <MdMenu
                onClick={toggleResponsiveMenu}
                size={32}
                style={iconStyle}
                className={iconClassName}
                data-testid='HeaderResponsiveMenuButton-id'
            />
        </Container>
    )
}