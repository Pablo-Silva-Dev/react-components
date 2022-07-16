import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { NewsletterCard } from '.'
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

describe('NewsletterCard', () => {
    it('should render correctly', () => {
        render(
            <NewsletterCard
                emailPlaceholder='newslettercard-email-placeholder'
                namePlaceholder='newslettercard-name-placeholder'
                submit={async () => { }}
                title='newslettercard-title'
            />, {
            wrapper: StyledProvider
        }
        )
        const component = screen.getByText('newslettercard-title')
        expect(component).toBeInTheDocument()
    })
})