import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import {render, screen} from '@testing-library/react'
import {NextLink} from '.'
import { theme } from '../../../themes/theme'

interface ChildrenProps{
    children: ReactNode
}

const StyledProvider : React.FC = ({children} : ChildrenProps) => {
    return(
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

describe('NextLink', () => {
    it('should render correctly', () => {
        render(
            <NextLink
                title='Next Link Title'
                url='/'
            />,{
                wrapper: StyledProvider
            }
        )

        const component = screen.getByText('Next Link Title')
        expect(component).toHaveProperty('title')
    })
})