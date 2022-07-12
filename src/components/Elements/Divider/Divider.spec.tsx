import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { Divider } from './index'

interface ChildrenProps {
    children: ReactNode
}

const StyledWrapper = ({ children }: ChildrenProps) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

describe('Divider', () => {
    it('should render correctly', () => {
        render(
            <Divider
                data-testid='divider'
            />,
            { wrapper: StyledWrapper }
        )

        const component = screen.getByTestId('divider')
        expect(component)
            .toHaveAttribute('class', 'styles__Container-sc-rfxauc-0 kDraTW')
    })
})