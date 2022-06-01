import { fireEvent, render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'


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

describe('Drawer', () => {
    it('should render correctly', () => {
        render(
            <Drawer
                direction='top'
                closeDrawer={() => { }}
            />,{
                wrapper: StyledProvider
            })

            const Drawer = screen.getByRole('menu')
            expect(Drawer).toBeInTheDocument()

    })
    
    it('should close Drawer', () => {
        const  {debug} = render(
            <Drawer
                direction={'vertical'}
                closeDrawer={() => { }}
            />,{
                wrapper: StyledProvider
            })

            const Drawer = screen.getByRole('menu')
            const closeDrawerButton = screen.getByRole('dialog')

            fireEvent.click(closeDrawerButton)
            expect(Drawer).toBeInTheDocument()

    })
})