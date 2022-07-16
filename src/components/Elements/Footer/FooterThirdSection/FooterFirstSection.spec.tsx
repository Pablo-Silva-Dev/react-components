import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../../themes/theme'
import { FooterThirdSection } from './'

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

describe('FooterThirdSection', () => {
    it('should render correctly', () => {
        render(
            <FooterThirdSection>
                <p>Test</p>
            </FooterThirdSection>,{
                wrapper: StyledProvider
            }
        )

        const component = screen.getByText('Test')
        expect(component).toBeInTheDocument()

    })
})