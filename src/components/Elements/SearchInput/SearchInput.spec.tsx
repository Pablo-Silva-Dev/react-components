import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { SearchInput } from './'

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

describe('SearchInput', () => {
    it('should render correctly', () => {
        render(
            <SearchInput
                data-testid='search-input-testid'
            />, {
            wrapper: StyledProvider
        }
        )
        const component = screen.getByTestId('search-input-testid')
        expect(component).toBeInTheDocument()
    })
})