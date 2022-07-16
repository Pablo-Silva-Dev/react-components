import { render, screen } from '@testing-library/react';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../themes/theme';
import { Loading } from './';

interface ChildrenProps {
    children: ReactNode;
}

const StyledProvider = ({ children }: ChildrenProps) => {
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