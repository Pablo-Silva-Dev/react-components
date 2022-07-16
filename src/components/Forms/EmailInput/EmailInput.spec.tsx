import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { EmailInput } from './'

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

describe('EmailInput', () => {
    it('should render correctly', () => {
       render(
        <EmailInput 
            showsIcon
            data-testid='email-input-test'
        />,{
            wrapper: StyledProvider
        }
        )

        const component = screen.getByTestId('email-input-test')

        expect(component).toBeInTheDocument()

    })
})
