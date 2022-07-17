import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { GradientText } from './'

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

describe('GradientText', () => {
    it('should render correctly', () => {
        render(
            <GradientText
                content='gradienttext-content'
                direction='right-to-left'
                initialColor='#55aadd'
                finalColor='#4aff3a'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByText('gradienttext-content')
        expect(component).toBeInTheDocument()

    })
})