import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { Accordion } from '.'
import { theme } from '../../../themes/theme'

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

describe('Accordion', () => {
    it('should render correctly', () => {
        render(
            <Accordion
                title='Accordion-title'
                content='Accordion-content'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByText('Accordion-content')
        expect(component).toBeInTheDocument()
    })
})