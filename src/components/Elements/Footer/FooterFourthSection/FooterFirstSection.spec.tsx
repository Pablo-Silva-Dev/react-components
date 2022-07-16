import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../../themes/theme'
import { FooterFourthSection } from './'

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

describe('FooterFourthSection', () => {
    it('should render correctly', () => {
        render(
            <FooterFourthSection>
                <p>Test</p>
            </FooterFourthSection>,{
                wrapper: StyledProvider
            }
        )

        const component = screen.getByText('Test')
        expect(component).toBeInTheDocument()

    })
})