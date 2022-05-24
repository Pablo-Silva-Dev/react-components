import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { ListLink } from '.'

interface ChildrenProps {
    children: ReactNode
}

const list = [
    { content: 'item1', url: '/' },
    { content: 'item2', url: '/' },
    { content: 'item3', url: '/' },
]

const StyledProvider: React.FC = ({ children }: ChildrenProps) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

describe('List', () => {
    it('should render correctly', () => {
        const { debug } = render(
            <ListLink
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
        const { debug } = render(
            <ListLink
            iconsSize={12}
            items={list}
            stripped
            data-testid='listlink-testid'
            />, {
                wrapper: StyledProvider
        }
        )
        
        debug()
        
        const component = screen.getByTestId('listlink-testid').firstChild
        expect(component).toHaveClass('stripped')
    })
})