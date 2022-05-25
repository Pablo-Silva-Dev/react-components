import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../../themes/theme'
import { HeaderLinksContainer } from './'

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

describe('HeaderLinksContainer', () => {
    it('should render correctly', () => {
        render(
            <HeaderLinksContainer>
                <p>Link</p>
            </HeaderLinksContainer>
            , {
                wrapper: StyledProvider
            }
        )

        const component = screen.getByText('Link')
        expect(component).toBeInTheDocument()

    })
})