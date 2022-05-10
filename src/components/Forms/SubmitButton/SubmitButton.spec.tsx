import { render, screen, } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { SubmitButton } from './'

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
  

describe('SubmitButton', () => {
    it('should render correctly', () => {
        const { debug } = render(
            <SubmitButton
                disabled={false}
                loading={false}
                title='submit-button-title'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByText('submit-button-title')
        expect(component).toBeInTheDocument()
    })

    it('should render correctly loading animation while loading', () => {
        const { debug } = render(
            <SubmitButton
                disabled={false}
                loading
                title='submit-button-title'
                data-testid='submit-button-test-id'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByTestId('submit-button-children-test-id')
        expect(component).toBeInTheDocument()
    })
})

