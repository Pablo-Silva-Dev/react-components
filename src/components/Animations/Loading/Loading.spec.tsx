import { ReactNode } from 'react';
import { screen, render } from '@testing-library/react'
import { Loading } from './'
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../themes/theme';

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
            <Loading
            />,
            {
                wrapper: StyledProvider
            }
        )

        const component = screen.getByTestId('loading-id')

        expect(component).toBeInTheDocument()

    })
})