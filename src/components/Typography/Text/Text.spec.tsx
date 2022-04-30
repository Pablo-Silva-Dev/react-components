import {ReactNode} from 'react'
import {ThemeProvider} from 'styled-components'
import {Text} from '.'
import {render, screen} from '@testing-library/react'
import { theme } from '../../../themes/theme'

interface ChildrenProps {
    children : ReactNode
}

const StyledProvider : React.FC = ({children} : ChildrenProps) => {
    return(
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

describe('Text', () => {
    it('should render correctly', () => {
        render(
            <Text
                content='Text content'
            />,{
                wrapper: StyledProvider
            }
        )

            const component = screen.getByText('Text content')
            expect(component).toBeInTheDocument()
    })
})

