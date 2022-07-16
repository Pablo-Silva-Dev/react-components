import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { FacebookSignInButton } from '.'
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

describe('FacebookSignInButton', () => {
    it('should render correctly', () => {
      render(
            <FacebookSignInButton

                onClick={async () => { }}
                title='FacebookSignInbutton-title'
                data-testid='facebookSignInbutton-id'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByTestId('facebookSignInbutton-id')
        expect(component).toBeInTheDocument()

    })
})