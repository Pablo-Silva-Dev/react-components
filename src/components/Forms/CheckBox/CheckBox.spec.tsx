import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { CheckBox } from './'

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

describe('CheckBox', () => {
    it('should render correctly', () => {
        render(
            <CheckBox
                checked={false}
                onChange={() => { }}
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByRole('checkbox')
        expect(component).toBeInTheDocument()
    })
})