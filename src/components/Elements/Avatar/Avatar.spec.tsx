import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { Avatar } from '.'
import { theme } from '../../../themes/theme'

interface ChildrenProps {
    children: ReactNode
}

const StyledProvider = ({ children }: ChildrenProps) => {
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
                imageUrl='/avatar-img-url'
                data-testid='avatar-id'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByTestId('avatar-id')
        expect(component).toBeInTheDocument()

    })
})