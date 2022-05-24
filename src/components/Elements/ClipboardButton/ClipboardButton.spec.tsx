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
                isCopied={false}
                onClick={() => { }}
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
    it('should change feedback message when content is copyed', () => {
        render(
            <ClipboardButton
                isCopied={true}
                onClick={() => { }}
                copiedFeedbackMessage='clipboardbutton-copied-feedback-message'
                notCopiedFeedbackMessage='clipboardbutton-not-copied-feedback-message'
            />,
            {
                wrapper: StyledProvider
            }
        )

        const component = screen.getByText('clipboardbutton-copied-feedback-message')
        expect(component).toBeInTheDocument()
    })
})