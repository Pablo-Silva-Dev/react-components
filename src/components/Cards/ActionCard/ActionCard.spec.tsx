import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { ActionCard } from '.'
import { theme } from '../../../themes/theme'

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

describe('ActionCard', () => {
    it('should render correctly', () => {
        render(
            <ActionCard
                title='ActionCard-Title'
                content='ActionCard-content'
                data-testid='ActionCard-id'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByText('ActionCard-content')

        expect(component).toBeInTheDocument()

    })
})