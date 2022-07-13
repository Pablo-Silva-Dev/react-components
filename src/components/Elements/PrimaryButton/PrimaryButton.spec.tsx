import { fireEvent, render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { MdCable } from 'react-icons/md'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { PrimaryButton } from './'

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

    it('should render Loading correctly', () => {
        const { container } = render(
            <PrimaryButton
                title='PrimaryButton'
                onClick={() => { }}
                loading
            />, {
            wrapper: StyledProvider
        }
        )

        const component = container.querySelector('[attributeName="r"]')

        expect(component).toBeTruthy()

    })

    it('should render with icon correctly', () => {
        const { container } = render(
            <PrimaryButton
                title='PrimaryButton'
                onClick={() => { }}
                icon={<MdCable />}
            />, {
            wrapper: StyledProvider
        }
        )

        const component = container.querySelector('[fill="currentColor"]')
        expect(component).toBeTruthy()

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

        const fn = jest.fn()

        render(
            <PrimaryButton
                onClick={fn}
                title='PrimaryButtonDisabled'
                disabled
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByText('PrimaryButtonDisabled')

        fireEvent.click(component)
        expect(fn).not.toBeCalled()

    })
})
