import {render, screen} from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../../themes/theme'
import {FooterText} from '.'

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

describe('FooterText', () => {
    it('should render correctly', () => {
     render(
        <FooterText
            content='footer-text-content'
        />,{
            wrapper: StyledProvider
        }
        )

        const component = screen.getByText('footer-text-content')

        expect(component).toBeInTheDocument()

    })
})