import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { PasswordInput } from '.'
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

describe('PasswordInput', () => {
    it('should render correctly', () => {
        render(
            <PasswordInput
                showsIcon
                passwordIsVisible={false}
                togglePassword={() => { }}
                data-testid='passwordinput-id'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByTestId('passwordinput-id')
        expect(component).toBeInTheDocument()

    })

    it('should be as password type when input is not visible', () => {
        render(
            <PasswordInput
                showsIcon
                passwordIsVisible={false}
                togglePassword={() => { }}
                data-testid='passwordinput-id'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByTestId('passwordinput-id')
        expect(component).toHaveAttribute('type', 'password')

    })
})