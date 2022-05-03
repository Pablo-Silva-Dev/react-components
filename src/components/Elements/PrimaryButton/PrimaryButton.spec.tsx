import { fireEvent, render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { PrimaryButton } from './'

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

describe('PrimaryButton', () => {
    it('should render correctly', () => {
        render(
            <PrimaryButton
                title='PrimaryButton'
                onClick={() => { }}
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByText('PrimaryButton')

        expect(component).toBeInTheDocument()

    })

    it('should be called on click', () => {

        const fn = jest.fn()

        render(
            <PrimaryButton
                title='PrimaryButton'
                onClick={fn}
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByText('PrimaryButton')

        fireEvent.click(component)

        expect(fn).toBeCalled()

    })

    it('should be disabled', () => {
        render(
            <PrimaryButton
                onClick={() => { }}
                title='PrimaryButtonDisabled'
                disabled={true}
            />,{
                wrapper: StyledProvider
            }
        )

        const component = screen.getByText('PrimaryButtonDisabled')

        expect(component).toBeDisabled()

    })
})
