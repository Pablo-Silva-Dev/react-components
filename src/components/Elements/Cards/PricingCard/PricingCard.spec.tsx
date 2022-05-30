import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../../themes/theme'
import { PricingCard } from '.'

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

describe('PricingCard', () => {
    it('should render correctly', () => {
        render(
            <PricingCard
                dealsPrice='pricing-card-deals-price'
                finishPurchase={() => { }}
                oldPrice='pricing-card-old-price'
                firstResourceText='pricing-card-first-resource-text'
                title='pricing-card-title'
                totalPrice='pricing-card-total-price'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByText('pricing-card-first-resource-text')
        expect(component).toBeInTheDocument()
    })


    it('should render as recomended card correctly', () => {
        render(
            <PricingCard
                dealsPrice='pricing-card-deals-price'
                isRecomended
                finishPurchase={() => { }}
                oldPrice='pricing-card-old-price'
                firstResourceText='pricing-card-first-resource-text'
                title='pricing-card-title'
                totalPrice='pricing-card-total-price'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByText('Recomendado')
        expect(component).toBeInTheDocument()
    })


    it('should render with all props correctly', () => {
        render(
            <PricingCard
                dealsPrice='pricing-card-deals-price'
                isRecomended
                finishPurchase={() => { }}
                oldPrice='pricing-card-old-price'
                firstResourceText='pricing-card-first-resource-text'
                secondResourceText='pricing-card-second-resource-text'
                thirdResourceText='pricing-card-third-resource-text'
                fourthResourceText='pricing-card-fourth-resource-text'
                fivethResourceText='pricing-card-fiveth-resource-text'
                title='pricing-card-title'
                totalPrice='pricing-card-total-price'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByText('pricing-card-fiveth-resource-text')
        expect(component).toBeInTheDocument()
    })
})


