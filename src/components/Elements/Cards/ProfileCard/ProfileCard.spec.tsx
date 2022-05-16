import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../../themes/theme'
import { ProfileCard } from './'

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

describe('ProfileCard', () => {
    it('should render correctly', () => {
        render(
            <ProfileCard
                imgAlt='profilecard-img-alt'
                imgUrl='/profilecard-img-url'
                title='profile-card-title'
                data-testid='profile-card-id'
            />, {
            wrapper: StyledProvider
        }
        )
        const component = screen.getByTestId('profile-card-id')
        expect(component).toHaveAttribute('alt', 'profilecard-img-alt')
    })
})