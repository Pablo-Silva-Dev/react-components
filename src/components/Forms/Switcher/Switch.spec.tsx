import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { Switcher } from '.'
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

describe('Switch', () => {
    it('should render correctly', () => {
        render(
            <Switcher
                checked
                onChange={() => { }}
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByRole('switch')
        expect(component).toHaveAttribute('aria-checked', 'true')
    })
    it('should be unchecked when checked is false', () => {
        render(
            <Switcher
                checked={false}
                onChange={() => { }}
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByRole('switch')
        expect(component).toHaveAttribute('aria-checked', 'false')
    })
})