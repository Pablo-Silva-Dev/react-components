import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { Timeline } from './'

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

describe('Timeline', () => {
    it('should render correctly', () => {
        render(
            <Timeline>
                <p>test</p>
            </Timeline>, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByText('test')
        expect(component).toBeInTheDocument()

    })
})