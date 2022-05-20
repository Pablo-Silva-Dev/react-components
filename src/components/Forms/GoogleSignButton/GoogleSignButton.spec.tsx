import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { GoogleSignButton } from './'

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

describe('googleSignButton', () => {
    it('should render correctly', () => {
      render(
            <GoogleSignButton

                onClick={async () => { }}
                title='googlesignbutton-title'
                data-testid='googlesignbutton-id'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByTestId('googlesignbutton-id')
        expect(component).toBeInTheDocument()

    })
})