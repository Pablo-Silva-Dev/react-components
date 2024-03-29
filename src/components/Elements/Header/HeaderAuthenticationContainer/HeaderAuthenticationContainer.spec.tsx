import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../../themes/theme'
import { HeaderAuthenticationContainer } from './'

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

describe('HeaderAuthenticationContainer', () => {
    it('should render correctly', () => {
         render(
            <HeaderAuthenticationContainer
            >
                <p>HeaderAuthenticationContainer</p>
            </HeaderAuthenticationContainer>, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByText('HeaderAuthenticationContainer')
        expect(component).toBeInTheDocument()

    })
})
