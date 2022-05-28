import {fireEvent, render, screen} from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../../themes/theme'
import  {HeaderResponsiveMenuButton } from '.'

interface ChildrenProps{
    children: ReactNode
}

const StyledProvider : React.FC = ({children} : ChildrenProps) => {
    return(
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

describe('HeaderResponsiveMenuButton', () => {

    const openResponsiveMenu = jest.fn();
    it('should render correctly', () => {
    render(
        <HeaderResponsiveMenuButton
        openResponsiveMenu={openResponsiveMenu}
        data-testid='HeaderResponsiveMenuButton-id'
        />,{
            wrapper: StyledProvider
        }
        )

        const component = screen.getByTestId('HeaderResponsiveMenuButton-id')
        expect(component).toBeInTheDocument()
    })

    it('should call openResponsiveMenu function correctly', () => {
    render(
        <HeaderResponsiveMenuButton
        openResponsiveMenu={openResponsiveMenu}
        data-testid='HeaderResponsiveMenuButton-id'
        />,{
            wrapper: StyledProvider
        }
        )

        const component = screen.getByTestId('HeaderResponsiveMenuButton-id')
        fireEvent.click(component)
        expect(openResponsiveMenu).toBeCalled()
    })
})