import {ReactNode} from 'react'
import {render, screen} from '@testing-library/react'
import {Title} from '.'
import { ThemeProvider } from 'styled-components'
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

describe('Title', () => {
    it('should render correctly', () => {
        render(
            <Title
                content='Title content'
            />,
            {
                wrapper: StyledProvider
            }
        )

            const component = screen.getByText('Title content')
            expect(component).toBeInTheDocument()

    })
})
