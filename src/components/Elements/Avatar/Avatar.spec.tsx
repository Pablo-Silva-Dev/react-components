import React, { ReactNode } from 'react'
import { render, screen } from '@testing-library/react'
import { Avatar } from '.'
import { theme } from '../../../themes/theme'
import { ThemeProvider } from 'styled-components'

interface ChildrenProps {
    children: ReactNode
}

const StyledProvider: React.FC = ({ children }: ChildrenProps) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

describe('Avatar', () => {

    it('should render correctly', () => {
        render(
            <Avatar
                imgAlt='avatar-img-alt'
                imageUrl='/avatar-img-url'
                data-testid='avatar-id'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByTestId('avatar-id')
        expect(component).toHaveAttribute('alt', 'avatar-img-alt')

    })
})