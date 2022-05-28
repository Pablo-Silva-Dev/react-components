import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { GroupInfo } from './'

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

describe('GroupInfo', () => {
    it('should render correctly', () => {
        render(
            <GroupInfo
                title='groupinfo-title'
            >
                <p>GroupInfo Text</p>
            </GroupInfo>
            , {
                wrapper: StyledProvider
            }
        )
        const component = screen.getByText('groupinfo-title')
        expect(component).toBeInTheDocument()

    })
    it('should render content prop correctly', () => {
       render(
            <GroupInfo
                title='groupinfo-title'
                content='groupinfo-content'
            >
                <p>GroupInfo Text</p>
            </GroupInfo>
            , {
                wrapper: StyledProvider
            }
        )
        const component = screen.getByText('groupinfo-content')
        expect(component).toBeInTheDocument()

    })
})