import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { StepProgress } from './'

interface ChildrenProps {
    children: ReactNode
}

const tasks = [
    { process: 'process1', status: 'pendent' },
    { process: 'process2', status: 'pendent' }
]

const StyledProvider: React.FC = ({ children }: ChildrenProps) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

describe('StepProgress', () => {
    it('should render correctly', () => {
        render(
            <StepProgress
                steps={tasks}
                currentIndex={1}
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByText('process1')
        expect(component).toBeInTheDocument()
    })
})