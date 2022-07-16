import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../../themes/theme'
import { NavTitle } from './'

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

describe('NavTitle', () => {
    it('should render correctly', () => {
        const {debug} = render(
            <NavTitle
                content='navtitle-content'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByText('navtitle-content')
        expect(component).toBeInTheDocument()

    })
})