import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { Footer } from '.'
import { theme } from '../../../themes/theme'
import { FooterTitle } from './FooterTitle'

interface ChildrenProps {
    children: ReactNode
}

const StyledProvider = ({ children }: ChildrenProps) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

describe('Footer', () => {
    it('should render correctly', () => {
        render(
            <Footer>
                <FooterTitle
                    content='children-footer-title'
                />
            </Footer>, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByText('children-footer-title')

        expect(component).toBeInTheDocument()

    })
})