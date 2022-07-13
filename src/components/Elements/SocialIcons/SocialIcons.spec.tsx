import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { SocialIcons } from './'

interface ChildrenProps {
    children: ReactNode
}

const StyledProvider = ({ children }: ChildrenProps) => {
    return (
        <ThemeProvider theme={theme} >
            {children}
        </ThemeProvider >
    )
}

describe('SocialIcons', () => {
    it('should render correctly', () => {
       const {debug}  = render(
            <SocialIcons
                data-testid='test-social-icons'
            />,
            { wrapper: StyledProvider })

        const component = screen.getByTestId('test-social-icons')
        expect(component).toHaveClass('styles__Container-sc-1sy1yaa-0 iINMPA')

        debug()
    })

    it('should render instagram icon', () => {
       

        const fn = jest.fn((url: string) => url)

        const {container} = render(
            <SocialIcons
                data-testid='test-social-icons'
                instagramUrl='/'


            />,
            { wrapper: StyledProvider })

        const component = container.querySelector('[viewBox="0 0 448 512" ]')
        expect(component).toBeInTheDocument()
    })

})