import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { VideoModal } from './'

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

describe('VideoModal', () => {
    it('should render correctly', () => {
        render(
            <VideoModal
                addressUrl='/'
                isOpen
                onRequestClose={() => { }}
            />,
            {
                wrapper: StyledProvider
            }
        )
        const component = screen.getByRole('dialog')
        expect(component).toBeInTheDocument()
    })
})