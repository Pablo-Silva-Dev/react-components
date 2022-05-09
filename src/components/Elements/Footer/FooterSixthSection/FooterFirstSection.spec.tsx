import { ReactNode } from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../../themes/theme'
import { FooterSixthSection } from './'

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

describe('FooterSixthSection', () => {
    it('should render correctly', () => {
        render(
            <FooterSixthSection>
                <p>Test</p>
            </FooterSixthSection>,{
                wrapper: StyledProvider
            }
        )

        const component = screen.getByText('Test')
        expect(component).toBeInTheDocument()

    })
})