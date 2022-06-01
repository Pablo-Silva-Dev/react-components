import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { NewsletterCard } from '.'

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