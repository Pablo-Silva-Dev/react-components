import { render, screen, } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { Badge } from './'

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

describe('Badge', () => {
    it('should render correctly', () => {

        render(
            <Badge
                title='Badge Title'
                badgePrimaryColor='cyan'
                badgeSecondaryColor='yellow'
            />, {
            wrapper: StyledProvider
        })

        const component = screen.getByText('Badge Title')
        expect(component).toBeInTheDocument()

    })
})