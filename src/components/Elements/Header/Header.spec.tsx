import {render, screen} from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import  {Header } from './'

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

describe('Header', () => {
    it('should render correctly', () => {
      render(
        <Header>
            <p>Header Content</p>
        </Header>
        ,{
            wrapper: StyledProvider
        }
        )

        const component = screen.getByText('Header Content')
        expect(component).toBeInTheDocument()

    })
})