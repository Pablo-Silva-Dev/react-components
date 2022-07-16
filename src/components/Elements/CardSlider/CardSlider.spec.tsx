import { render, screen, waitFor } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { CardSlider } from './'

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

const childrensContent = ['el1', 'el2', 'el3']

describe('Badge', () => {
    it('should render correctly', () => {

        render(
            <CardSlider
                slidesToScroll={3}
                slidesToShow={3}
            >
                {childrensContent.map(children => (
                    <p key={children}>{children}</p>
                ))}
            </CardSlider>
            , {
                wrapper: StyledProvider
            })

            
            const component = screen.findByText('el1')
            waitFor(() => {expect(component).toBeInTheDocument()})

    })
})