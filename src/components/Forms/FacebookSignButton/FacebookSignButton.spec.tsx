import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { FacebookSignButton } from './'

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

describe('FacebookSignButton', () => {
    it('should render correctly', () => {
      render(
            <FacebookSignButton

                onClick={async () => { }}
                title='Facebooksignbutton-title'
                data-testid='facebooksignbutton-id'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByTestId('facebooksignbutton-id')
        expect(component).toBeInTheDocument()

    })
})