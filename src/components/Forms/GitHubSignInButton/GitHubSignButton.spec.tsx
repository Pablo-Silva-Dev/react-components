import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { GitHubSignInButton } from '.'

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

describe('GitHubSignInButton', () => {
    it('should render correctly', () => {
      render(
            <GitHubSignInButton

                onClick={async () => { }}
                title='githubSignInbutton-title'
                data-testid='githubSignInbutton-id'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByTestId('githubSignInbutton-id')
        expect(component).toBeInTheDocument()

    })
})