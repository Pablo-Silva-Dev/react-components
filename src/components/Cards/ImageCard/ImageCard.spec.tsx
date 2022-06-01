import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { ImageCard } from '.'

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

describe('ImageCard', () => {
    it('should render correctly', () => {
        render(
            <ImageCard
                imgAlt='imagecard-alt'
                imgUrl='/'
                data-testid='imagecard-id'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByTestId('imagecard-id')

        expect(component).toBeInTheDocument()

    })
})