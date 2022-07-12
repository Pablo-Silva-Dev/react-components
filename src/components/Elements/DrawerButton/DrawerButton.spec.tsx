import { fireEvent, render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { DrawerButton } from '.'
import { theme } from '../../../themes/theme'

interface ChildrenProps{
    children: ReactNode
}

const StyledProvider = ({children} : ChildrenProps) => {
    return(
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

describe('HeaderDrawerButton', () => {

    const toggleDrawer = jest.fn();

    it('should render correctly', () => {
    render(
        <DrawerButton
        toggleDrawer={toggleDrawer}
        data-testid='HeaderDrawerButton-id'
        />,{
            wrapper: StyledProvider
        }
        )

        const component = screen.getByTestId('HeaderDrawerButton-id')
        expect(component).toBeInTheDocument()
    })

    it('should call toggleDrawer function correctly', () => {
    render(
        <DrawerButton
        toggleDrawer={toggleDrawer}
        data-testid='HeaderDrawerButton-id'
        />,{
            wrapper: StyledProvider
        }
        )

        const component = screen.getByTestId('HeaderDrawerButton-id')
        fireEvent.click(component)
        expect(toggleDrawer).toBeCalled()
    })
})