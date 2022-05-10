import {render, screen} from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../../themes/theme'
import {FooterLink} from './'

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

describe('FooterLink', () => {
    it('should render correctly', () => {
      render(
        <FooterLink
            content='footer-link-content'
            url='/'
        />,{
            wrapper: StyledProvider
        }
        )

        const component = screen.getByText('footer-link-content')

        expect(component).toBeInTheDocument()

    })
})