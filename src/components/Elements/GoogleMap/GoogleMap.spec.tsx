import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { GoogleMap } from './'

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

describe('GoogleMap', () => {
    it('should render correctly', () => {
        render(
            <GoogleMap
                addressUrl='/'
                data-testid='googlemap-id'
            />, {
            wrapper: StyledProvider
        }
        )
        const component = screen.getByTestId('googlemap-id')
        expect(component).toBeInTheDocument()
    })
})