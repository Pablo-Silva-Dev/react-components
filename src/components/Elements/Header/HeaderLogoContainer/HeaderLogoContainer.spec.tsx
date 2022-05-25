import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../../themes/theme'
import { HeaderLogoContainer } from './'

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

describe('HeaderLogoContainer', () => {
    it('should render correctly', () => {
        render(
            <HeaderLogoContainer>
                <p>Logo</p>
            </HeaderLogoContainer>
            , {
                wrapper: StyledProvider
            }
        )

        const component = screen.getByText('Logo')
        expect(component).toBeInTheDocument()

    })
})