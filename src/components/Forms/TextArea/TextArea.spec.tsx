import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { TextArea } from './'

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

describe('TextArea', () => {
    it('should render correctly', () => {
        render(
            <TextArea
                placeholder='textarea-placeholder'
            />, {
            wrapper: StyledProvider
        }
        )
        const component = screen.getByPlaceholderText('textarea-placeholder')
        expect(component).toBeTruthy()
    })
})