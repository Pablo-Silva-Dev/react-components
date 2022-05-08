import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../../themes/theme'
import { TitleCard } from '.'

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

describe('TitleCard', () => {
    it('should render correctly', () => {
        render(
            <TitleCard
                title='titlecard-Title'
                content='titlecard-content'
                data-testid='titlecard-id'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByText('titlecard-content')

        expect(component).toBeInTheDocument()

    })
})