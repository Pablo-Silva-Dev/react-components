import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { Dropdown } from '.'
import { theme } from '../../../themes/theme'

interface ChildrenProps {
    children: ReactNode
}

const list = [
    { content: 'item1', url: '/' },
    { content: 'item2', url: '/' },
    { content: 'item3', url: '/' },
]

const StyledProvider = ({ children }: ChildrenProps) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

describe('List', () => {
    it('should render correctly', () => {
         render(
            <Dropdown
                iconsSize={12}
                items={list}
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByText('item1')
        expect(component).toBeInTheDocument()

    })
    it('should render a stripped list', () => {
        render(
            <Dropdown
                iconsSize={12}
                items={list}
                stripped
                data-testid='Dropdown-testid'
            />, {
            wrapper: StyledProvider
        }
        )
        const component = screen.getByTestId('Dropdown-testid').firstChild
        expect(component).toHaveClass('stripped')
    })
})
