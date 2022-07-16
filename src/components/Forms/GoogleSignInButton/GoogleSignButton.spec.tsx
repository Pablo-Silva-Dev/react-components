import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { GoogleSignInButton } from '.'
import { theme } from '../../../themes/theme'

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

describe('googleSignInButton', () => {
    it('should render correctly', () => {
      render(
            <GoogleSignInButton

                onClick={async () => { }}
                title='googleSignInbutton-title'
                data-testid='googleSignInbutton-id'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByTestId('googleSignInbutton-id')
        expect(component).toBeInTheDocument()

    })
})