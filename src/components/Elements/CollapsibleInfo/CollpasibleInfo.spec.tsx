import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { CollapsibleInfo } from './'

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

describe('CollapsibleInfo', () => {
    it('should render correctly', () => {
        render(
            <CollapsibleInfo
                title='collapsibleinfo-title'
                content='collapsibleinfo-content'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByText('collapsibleinfo-content')
        expect(component).toBeInTheDocument()
    })
})