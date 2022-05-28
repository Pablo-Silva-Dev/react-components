import {fireEvent, render, screen} from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../../themes/theme'
import  {HeaderResponsiveMenu } from './'

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

describe('HeaderResponsiveMenu', () => {

    const openResponsiveMenu = jest.fn();
    it('should render correctly', () => {
    render(
        <HeaderResponsiveMenu
        openResponsiveMenu={openResponsiveMenu}
        data-testid='headerresponsivemenu-id'
        />,{
            wrapper: StyledProvider
        }
        )

        const component = screen.getByTestId('headerresponsivemenu-id')
        expect(component).toBeInTheDocument()
    })

    it('should call openResponsiveMenu function correctly', () => {
    render(
        <HeaderResponsiveMenu
        openResponsiveMenu={openResponsiveMenu}
        data-testid='headerresponsivemenu-id'
        />,{
            wrapper: StyledProvider
        }
        )

        const component = screen.getByTestId('headerresponsivemenu-id')
        fireEvent.click(component)
        expect(openResponsiveMenu).toBeCalled()
    })
})