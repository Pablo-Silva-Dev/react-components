import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../../themes/theme'
import { TestimonialCard } from '.'

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

describe('TestimonialCard', () => {
    it('should render correctly', () => {
        render(
            <TestimonialCard
                alt='testimonialcard-alt'
                personName='testimonialcard-person-name'
                testimonial='tertimonialcard-testimonial'
                stars={4}
                personPhotoUrl='testimonialcard-person-photo-url'
                data-testid='testimonialcard-id'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByTestId('testimonialcard-id')

        expect(component).toBeInTheDocument()

    })
})