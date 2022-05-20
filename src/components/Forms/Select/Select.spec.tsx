import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { Select } from './'

interface ChildrenProps {
    children: ReactNode
}

const optionsTest = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const StyledProvider: React.FC = ({ children }: ChildrenProps) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

describe('Select', () => {
    it('should render correctly', () => {
        render(
            <Select
                name='select-name'
                onChange={() => { }}
                options={optionsTest}
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByText('Strawberry')
        expect(component).toBeInTheDocument()

    })
})