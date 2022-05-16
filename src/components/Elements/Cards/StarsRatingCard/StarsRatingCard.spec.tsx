import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../../themes/theme'
import { StarsRatingCard } from './'

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

describe('StarsRatingCard', () => {
    it('should render correctly', () => {
        render(
            <StarsRatingCard
                onClick={() => { }}
                rating={3}
                title='starsratingcard-title'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByText('starsratingcard-title')
        expect(component).toBeInTheDocument()


    })
})