import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { Logo } from './'

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

describe('Logo', () => {
    it('should render correctly', () => {
        render
            (
                <Logo
                    imageUrl='/logo-image-url'
                    imgAlt='logo-image-alt'
                />, {
                wrapper: StyledProvider
            }
            )

        const component = screen.getByAltText('logo-image-alt')
        expect(component).toBeInTheDocument()

    })
})
