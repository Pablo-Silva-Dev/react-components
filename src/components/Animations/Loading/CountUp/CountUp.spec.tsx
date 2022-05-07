import { ReactNode } from 'react';
import { screen, render } from '@testing-library/react'
import { CountUpAnimation } from '.'
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../themes/theme';

interface ChildrenProps {
    children: ReactNode;
}

const StyledProvider: React.FC = ({ children }: ChildrenProps) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}


describe('Loading', () => {
    it('should render correctly', () => {
        render(
            <CountUpAnimation
                start={100}
                end={1000}
            />,
            {
                wrapper: StyledProvider
            }
        )

        const component = screen.getByText(100)

        expect(component).toBeInTheDocument()

    })
})