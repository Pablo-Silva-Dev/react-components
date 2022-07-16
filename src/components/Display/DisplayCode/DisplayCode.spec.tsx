import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { DisplayCode } from './'

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

describe('DisplayCode', () => {
    it('should render correctly', () => {
        render(
            <DisplayCode
                //eslint-disable-next-line
                children="<p>Code</p>"
            />, {
            wrapper: StyledProvider
        }
        )
        const component = screen.getByText('Code')
        expect(component).toBeInTheDocument()
    })
})