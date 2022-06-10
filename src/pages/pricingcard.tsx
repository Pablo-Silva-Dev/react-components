import { GoPrimitiveDot } from 'react-icons/go';
import { PricingCard as PricingCardComponent } from '../components/Cards/PricingCard';
import { DisplayCode } from '../components/Display/DisplayCode';
import { SubTitle } from "../components/Typography/SubTitle";
import { Text } from "../components/Typography/Text";
import { Title } from "../components/Typography/Title";
import {
    ComponentContainer,
    Container,
    DescriptionContainer,
    PreviewContainer,
    PropsContainer
} from "../styles";

export default function Avatar() {

    const resourcesList = [
        'Queue priority',
        'VIP access',
        'Additional content every month'
    ]

    const props = {
        title: 'Description: PricingCard title. Type: String. Required.',
        resources: 'Description: An array containing all product features. Type: string[]. Required.',
        totalPrice: 'Description: TotalPrice content. Type: String. Required.',
        resourceIcon: 'Description: A space to render some Icon or SVG for each resource. Type: ReactNode.',
        oldPrice: 'Description: OldPrice content. Type: String.',
        recommendationTitle: 'Description: Recommendation content. Type: String.',
        dealsMonthPrice: 'Description: DealsMonthPrice content. Type: String.',
        finishPurchase: 'Description: Function to invoke to purchase product. Type: Async function. Required.',
        purchaseButtonTitle: 'Description: PurchaseButtonTitle content. Type: String. Required.',
        cardStyle: 'Description: Card style. Type: CSS Properties.',
        cardClassName: 'Description: Card className. Type: String.',
        titleStyle: 'Description: Title style. Type: CSS Properties.',
        titleClassName: 'Description: Title className. Type: String.',
        oldPriceClassName: 'Description: OldPrice className. Type: String.',
        oldPriceStyle: 'Description: OldPrice style. Type: CSS Properties.',
        resourceClassName: 'Description: Resource item className. Type: String.',
        resourceStyle: 'Description: Resource item style. Type: CSS Properties.',
        totalPriceStyle: 'Description: TotalPrice style. Type: CSS Properties.',
        totalPriceClassName: 'Description: TotalPrice className. Type: String.',
        dealsMonthPriceStyle: 'Description: DealsMonthPrice style. Type: CSS Properties.',
        dealsMonthPriceClassName: 'Description: DealsMonthPrice className. Type: String.',
        purchaseButtonStyle: 'Description: PurchaseButton style. Type: CSS Properties.',
        purchaseButtonClassName: 'Description: PurchaseButton className. Type: String.',
        recommendationTitleStyle: 'Description: RecommendationTitle style. Type: CSS Properties.',
        recommendationTitleClassName: 'Description: RecommendationTitle className. Type: String.',
        glassEffect: 'Description: Applies glassEffect className if true. Type: Boolean. Default: False.',
        children: 'Description: A space to render additional content. Type: ReactNode.'
    }

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='PricingCard'
                    />
                    <Text
                        content='A complete pricing card.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <PricingCardComponent
                        resources={resourcesList}
                        dealsMonthPrice='10 x $ 55.99'
                        oldPrice='$700.00'
                        finishPurchase={async () => { }}
                        title='Master Plan'
                        totalPrice='$559.9'
                        recommendationTitle='Best price'
                        purchaseButtonTitle='I want'
                        resourceIcon={
                            <GoPrimitiveDot
                                size={8}
                                style={{ margin: 4 }}
                            />
                        }
                    />
                </PreviewContainer>

                <PropsContainer>
                    <SubTitle
                        content='Props:'
                        style={{
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}
                    />
                    {Object.entries(props).map(prop => (
                        <>
                            <SubTitle
                                content={prop[0]}
                                style={{
                                    fontSize: 16
                                }}
                            />
                            <Text
                                content={prop[1]}
                            />
                        </>
                    ))}
                </PropsContainer>
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    <PricingCardComponent
                        resources={resourcesList}
                        dealsMonthPrice='10 x $ 55.99'
                        oldPrice='$700.00'
                        finishPurchase={async () => { }}
                        title='Master Plan'
                        totalPrice='$559.9'
                        recommendationTitle='Best price'
                        purchaseButtonTitle='I want'
                        resourceIcon={
                            <GoPrimitiveDot
                                size={8}
                                style={{ margin: 4 }}
                            />
                        }
                    />"
                />
            </ComponentContainer>
        </Container>
    )
}