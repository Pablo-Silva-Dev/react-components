import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { ProductCard } from '.'

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

describe('ProductCard', () => {
    it('should render correctly', () => {
        render(
            <ProductCard
                addToCart={async () => { }}
                addToFavorites={async () => { }}
                imgAlt='productcard-img-alt'
                imgUrl='/productcard-img-url'
                price='R$99,78'
                priceOnCredit='R$109,88'
                ratings={1.5}
                title='productcard-title'
            />, {
            wrapper: StyledProvider
        }
        )
        const component = screen.getByText('productcard-title')
        expect(component).toBeInTheDocument()

    })
})