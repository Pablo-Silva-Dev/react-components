import { fireEvent, render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { DisplayInfo } from '.'
import { theme } from '../../../themes/theme'

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

describe('DisplayInfo', () => {
    it('should render correctly', () => {
        render(
            <DisplayInfo
                content='DisplayInfo content'
                title='DisplayInfo title'
                data-testid='DisplayInfo-id'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByTestId('DisplayInfo-id')

        expect(component).toBeInTheDocument()

    })

    it('should call function to open url', () => {

        const fn = jest.fn()

        render(
            <DisplayInfo
                content='DisplayInfo content'
                title='DisplayInfo title'
                data-testid='DisplayInfo-id'
                openUrl={fn}
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByTestId('DisplayInfo-id')
        fireEvent.click(component)
        expect(fn).toBeCalled()
    })
})