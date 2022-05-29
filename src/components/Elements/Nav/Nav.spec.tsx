import {render, screen} from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import  {Nav } from './'

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

describe('Nav', () => {
    it('should render correctly', () => {
      render(
        <Nav>
            <p>Nav Content</p>
        </Nav>
        ,{
            wrapper: StyledProvider
        }
        )

        const component = screen.getByText('Nav Content')
        expect(component).toBeInTheDocument()

    })
})