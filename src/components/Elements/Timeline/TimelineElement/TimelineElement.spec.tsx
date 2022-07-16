import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../../themes/theme'
import { TimelineElement } from './'

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

describe('TimelineElement', () => {
    it('should render correctly', () => {
        render(
            <TimelineElement
                content='timelineelement-content'
                title='timelineelement-title'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByText('timelineelement-content')
        expect(component).toBeInTheDocument()

    })
})