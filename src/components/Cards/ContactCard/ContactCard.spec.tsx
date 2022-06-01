import { fireEvent, render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { ContactCard } from '.'

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

describe('ContactCard', () => {
    it('should render correctly', () => {
        render(
            <ContactCard
                email='contactcard-email'
                title='contactcard-title'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByText('contactcard-email')
        expect(component).toBeInTheDocument()

    })
    it('should render phone prop correctly', () => {
        render(
            <ContactCard
                email='contactcard-email'
                title='contactcard-title'
                phone='12345678'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByText('12345678')
        expect(component).toBeInTheDocument()

    })
    it('should render address prop correctly', () => {
        render(
            <ContactCard
                email='contactcard-email'
                address='contactcard-address'
                title='contactcard-title'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByText('contactcard-address')
        expect(component).toBeInTheDocument()

    })
    it('should render WhatsappButton correctly', () => {
        render(
            <ContactCard
                email='contactcard-email'
                title='contactcard-title'
                whatsappConversationUrl='/'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByText('Entrar em contato')
        expect(component).toBeInTheDocument()

    })
})