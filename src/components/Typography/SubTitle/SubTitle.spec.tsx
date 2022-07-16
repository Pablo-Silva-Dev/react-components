import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { SubTitle } from '.'
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

describe('SubTitle', () => {
    it('should render correctly', () => {
        render(<SubTitle content='Some content' />, {
            wrapper: StyledProvider
        }
        )

        expect(screen.getByText('Some content')).toBeInTheDocument();

    })
})