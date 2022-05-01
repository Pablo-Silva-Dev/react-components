import React from 'react';
import { CloseMenuButton, Container, MenuContainer, MenuItem } from './styles';
import { MdMenu, MdClose } from 'react-icons/md'
import { useTheme } from 'styled-components'

interface ResponsiveMenuProps {
    closeResponsiveMenu: () => void
}

export function ResponsiveMenu({ closeResponsiveMenu }: ResponsiveMenuProps) {

    const theme = useTheme()

    return (
        <Container
        >
            <MenuContainer
            >
                <CloseMenuButton>
                    <MdClose
                        onClick={closeResponsiveMenu}
                        size={32}
                        color={theme.colors.white}
                    />
                </CloseMenuButton>
                <MenuItem
                    href='/'
                    onClick={closeResponsiveMenu}
                >
                    Home
                </MenuItem>
                <MenuItem
                    href='#solucoes'
                    onClick={closeResponsiveMenu}
                >
                    Soluções
                </MenuItem>
                <MenuItem
                    onClick={closeResponsiveMenu}
                    href='#oqueesperar'
                >
                    O que esperar
                </MenuItem>
                <MenuItem
                    onClick={closeResponsiveMenu}
                    href='#contato'
                >
                    Contato
                </MenuItem>
            </MenuContainer>
        </Container>
    )
}