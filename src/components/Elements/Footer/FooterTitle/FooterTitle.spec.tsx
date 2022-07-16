import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { FooterTitle } from '.'
import { theme } from '../../../../themes/theme'

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

describe('FooterTitle', () => {
    it('should render correctly', () => {
         render(
            <FooterTitle
                content='footer-title-content'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByText('footer-title-content')

        expect(component).toBeInTheDocument()

    })
})