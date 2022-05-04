import {
    Container, DealsPrice, InfoContainer, OldPrice, PriceContainer, PurchaseButton,
    RecomendationBadge, Text, TextItem, Title
} from './styles';

interface PricingCardProps {
    title: string;
    firstResourceText: string;
    secondResourceText?: string;
    thirdResourceText?: string;
    fourthResourceText?: string;
    fivethResourceText?: string;
    oldPrice: string;
    dealsPrice: string;
    totalPrice: string;
    finishPurchase: () => void;
    isRecomended?: boolean
}

export function PricingCard({
    title,
    firstResourceText,
    secondResourceText,
    thirdResourceText,
    fourthResourceText,
    fivethResourceText,
    oldPrice,
    dealsPrice,
    totalPrice,
    isRecomended,
    finishPurchase
}: PricingCardProps) {
    return (
        <Container>
            {isRecomended &&
                <RecomendationBadge>
                    Recomendado
                </RecomendationBadge>
            }
            <Title>{title}</Title>
            <InfoContainer>
                <TextItem>{firstResourceText}</TextItem>
                {
                    secondResourceText &&
                    <TextItem>{secondResourceText}</TextItem>
                }
                {
                    thirdResourceText &&
                    <TextItem>{thirdResourceText}</TextItem>
                }
                {
                    fourthResourceText &&
                    <TextItem>{fourthResourceText}</TextItem>
                }
                {
                    fivethResourceText &&
                    <TextItem>{fivethResourceText}</TextItem>
                }
            </InfoContainer>
            <PriceContainer>
                <Text>de</Text>
                <OldPrice>{oldPrice}</OldPrice>
                <Text>por</Text>
                <DealsPrice>{dealsPrice}</DealsPrice>
                <Text>ou</Text>
                <Text>{totalPrice}</Text>
            </PriceContainer>
            <PurchaseButton
                onClick={finishPurchase}
            >
                Quero esse Plano
            </PurchaseButton>
        </Container>
    )
}