import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../../themes/theme'
import { NavLink } from './'

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

describe('NavLink', () => {
    it('should render correctly', () => {
        render(
            <NavLink
                content='navlink-content'
                url='/'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByText('navlink-content')
        expect(component).toBeInTheDocument()

    })
})