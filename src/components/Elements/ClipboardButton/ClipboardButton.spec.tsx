import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { ClipboardButton } from './'

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

describe('ClipboardButton', () => {
    it('should render correctly', () => {
        render(
            <ClipboardButton
                content='clipboardbutton-content'
                copiedFeedbackMessage='clipboardbutton-copied-feedback-message'
                notCopiedFeedbackMessage='clipboardbutton-not-copied-feedback-message'
            />,
            {
                wrapper: StyledProvider
            }
        )

        const component = screen.getByText('clipboardbutton-not-copied-feedback-message')
        expect(component).toBeInTheDocument()
    })
})