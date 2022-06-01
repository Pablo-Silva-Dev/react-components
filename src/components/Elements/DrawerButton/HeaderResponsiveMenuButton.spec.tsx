import { fireEvent, render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { HeaderDrawerButton } from '.'
import { theme } from '../../../themes/theme'

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

describe('HeaderDrawerButton', () => {

    const openDrawer = jest.fn();
    it('should render correctly', () => {
    render(
        <HeaderDrawerButton
        openDrawer={openDrawer}
        data-testid='HeaderDrawerButton-id'
        />,{
            wrapper: StyledProvider
        }
        )

        const component = screen.getByTestId('HeaderDrawerButton-id')
        expect(component).toBeInTheDocument()
    })

    it('should call openDrawer function correctly', () => {
    render(
        <HeaderDrawerButton
        openDrawer={openDrawer}
        data-testid='HeaderDrawerButton-id'
        />,{
            wrapper: StyledProvider
        }
        )

        const component = screen.getByTestId('HeaderDrawerButton-id')
        fireEvent.click(component)
        expect(openDrawer).toBeCalled()
    })
})