import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { GitHubSignButton } from './'

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

describe('GitHubSignButton', () => {
    it('should render correctly', () => {
      render(
            <GitHubSignButton

                onClick={async () => { }}
                title='githubsignbutton-title'
                data-testid='githubsignbutton-id'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByTestId('githubsignbutton-id')
        expect(component).toBeInTheDocument()

    })
})