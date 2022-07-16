import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { TextInput } from '.'
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

describe('InputInput', () => {
    it('should render correctly', () => {
       render(
        <TextInput 
            data-testid='text-input-test'
        />,{
            wrapper: StyledProvider
        }
        )

        const component = screen.getByTestId('text-input-test')

        expect(component).toBeInTheDocument()

    })
})
