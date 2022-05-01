import { render, screen, fireEvent } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { ResponsiveMenu } from './'


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

describe('ResponsiveMenu', () => {
    it('should render correctly', () => {
        render(
            <ResponsiveMenu
                direction={'vertical'}
                closeResponsiveMenu={() => { }}
            />,{
                wrapper: StyledProvider
            })

            const responsiveMenu = screen.getByRole('menu')
            expect(responsiveMenu).toBeInTheDocument()

    })
})