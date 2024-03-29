import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { TestimonialCard } from '.'
import { theme } from '../../../themes/theme'

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

describe('TestimonialCard', () => {
    it('should render correctly', () => {
        render(
            <TestimonialCard
                personName='testimonialcard-person-name'
                testimonial='tertimonialcard-testimonial'
                ratings={4}
                personPhotoUrl='/testimonialcard-person-photo-url'
                data-testid='testimonialcard-id'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByTestId('testimonialcard-id')

        expect(component).toBeInTheDocument()

    })
})