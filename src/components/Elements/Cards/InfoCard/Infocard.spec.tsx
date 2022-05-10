import { fireEvent, render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../../themes/theme'
import { InfoCard } from '.'

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

describe('InfoCard', () => {
    it('should render correctly', () => {
        render(
            <InfoCard
                content='infocard content'
                title='infocard title'
                data-testid='infocard-id'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByTestId('infocard-id')

        expect(component).toBeInTheDocument()

    })

    it('should call function to open url', () => {

        const fn = jest.fn()

        render(
            <InfoCard
                content='infocard content'
                title='infocard title'
                data-testid='infocard-id'
                openUrl={fn}
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByTestId('infocard-id')
        fireEvent.click(component)
        expect(fn).toBeCalled()
    })
})