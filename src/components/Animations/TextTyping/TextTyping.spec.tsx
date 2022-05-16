import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { TextTyping } from './'
import { theme } from '../../../themes/theme'

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

describe('TextTyping', () => {
    it('should render correctly', () => {
        const rendered = render(
            <TextTyping
                firstText='texttyping-first-text'
                firstTextDelay={100}
                wrapper='p'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = rendered.container.querySelector('div').className
        expect(component).toBe('styles__Container-hWxmpy')
    })
})