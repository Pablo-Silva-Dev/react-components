import { fireEvent, render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import { SecondaryButton } from '.'
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




describe('SecondaryButton', () => {


    it('should render correctly', () => {

    
        render(
            <SecondaryButton
                title='SecondaryButton'
                onClick={() => { }}
            />, {
            wrapper: StyledProvider
        }

        )


        const component = screen.getByText('SecondaryButton')

        expect(component).toBeInTheDocument()

    })

    it('should be callled on click', () => {

        const fn = jest.fn()

        render(
            <SecondaryButton
                title='SecondaryButton'
                onClick={fn}

            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByText('SecondaryButton')

        fireEvent.click(component)

        expect(fn).toHaveBeenCalled()

    })

    it('should be disabled at loading is true', () => {
        render(
            <SecondaryButton
                title='SecondaryButtonDisabled'
                onClick={() => { }}
                disabled={true}
            />, {
            wrapper: StyledProvider
        }

        )

        const component = screen.getByRole('button', {name: /SecondaryButtonDisabled/i})

        expect(component).toBeDisabled()



    })
})
