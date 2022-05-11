import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { GoogleMap } from './'

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
        const { debug } = render(
            <GoogleMap
                addressUrl='/'
                data-testid='googlemap-id'
            />, {
            wrapper: StyledProvider
        }
        )
        debug()
        const component = screen.getByTestId('googlemap-id')
        expect(component).toBeInTheDocument()
    })
})