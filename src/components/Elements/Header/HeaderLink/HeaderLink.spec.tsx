import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../../themes/theme'
import { HeaderLink } from './'

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

describe('HeaderLink', () => {
    it('should render correctly', () => {
        render(
            <HeaderLink
                content='headerlink-content'
                url='headerlink-url'
            />, {
            wrapper: StyledProvider
        }
        )
        const component = screen.getByText('headerlink-content')
        expect(component).toBeInTheDocument()
    })
})