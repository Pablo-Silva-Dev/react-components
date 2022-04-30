import React, { ReactNode } from 'react'
import { render, screen } from '@testing-library/react'
import { SubTitle } from '.'
import { theme } from '../../../themes/theme'
import { ThemeProvider } from 'styled-components'

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

describe('SubTitle', () => {
    it('should render correctly', () => {
        render(<SubTitle content='Some content' />, {
            wrapper: StyledProvider
        }
        )

        expect(screen.getByText('Some content')).toBeInTheDocument();

    })
})