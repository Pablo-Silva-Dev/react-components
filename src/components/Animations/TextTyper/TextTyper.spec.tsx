import { render } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { TextTyper } from '.'

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

const list = ['one', 'two', 'three', 'four']

describe('TextTyper', () => {
    it('should render correctly', () => {
        const rendered = render(
            <TextTyper
                textList={list}
                textDelay={100}
                wrapper='p'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = rendered.container.querySelector('div').className
        expect(component).toBe('styles__Container-hWxmpy')
    })
})