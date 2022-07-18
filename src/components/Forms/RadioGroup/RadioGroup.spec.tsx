import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { RadioGroup } from './'

interface ChildrenProps {
    children: ReactNode
}


const options = [
    { value: 'chocolate', label: 'chocolate' },
    { value: 'cherry', label: 'cherry' },
    { value: 'apple', label: 'apple' },
]

const StyledProvider = ({ children }: ChildrenProps) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

describe('RadioGroup', () => {
    it('should render correctly', () => {
        render(
            <RadioGroup
                options={options}
                onChange={() => {}}
            />, {
            wrapper: StyledProvider
        }
        )
        const component = screen.getByText('apple')
        expect(component).toBeInTheDocument()
    })
})
