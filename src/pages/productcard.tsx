import { GoPrimitiveDot } from 'react-icons/go';
import { ProductCard as ProductCardComponent } from '../components/Cards/ProductCard';
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

    const props = {
        title: 'Description: ProductCard title. Type: String. Required.',
        price: 'Description: Product price. Type: String. Required.',
        imgUrl: 'Description: Product image url. Type: String. Required.',
        addToCart: 'Description: AddToCartButtonTitle content. Type: String. Required.',
        addToCartButtonTitle: 'Description: Function to invoke to add product in cart. Type: Async function. Required.',
        priceOnCredit: 'Description: Product price using credit card. Type: String.',
        ratings: 'Description: A string to represent the number of stars to represent the product review average. Type: Some value between 1 and 5, string.',
        addToFavorites: 'Description: Function to invoke to add product as favorite. Type: Async function.',
        removeFromFavorites: 'Description: Function to invoke to remove product from favorites. Type: Async function.',
        share: 'Description: Function to invoke to share product page link. Type: Async function.',
        isFavorited: 'Description: Define if a product is on favorites. Type: Boolean.',
        cardStyle: 'Description: Card style. Type: CSS Properties.',
        cardClassName: 'Description: Card className. Type: String.',
        titleStyle: 'Description: Title style. Type: CSS Properties.',
        titleClassName: 'Description: Title className. Type: String.',
        parcelledPriceClassName: 'Description: ParcelledPrice className. Type: String.',
        parcelledPriceStyle: 'Description: ParcelledPrice style. Type: CSS Properties.',
        totalPriceStyle: 'Description: TotalPrice style. Type: CSS Properties.',
        totalPriceClassName: 'Description: TotalPrice className. Type: String.',
        addToCartButtonStyle: 'Description: AddToCart style. Type: CSS Properties.',
        addToCartButtonClassName: 'Description: AddToCart className. Type: String.',
        glassEffect: 'Description: Applies glassEffect className if true. Type: Boolean. Default: False.',
        children: 'Description: A space to render additional content. Type: ReactNode.'
    }


    const product = {
        url: 'https://images.kabum.com.br/produtos/fotos/181089/processador-amd-ryzen-7-5700g-3-8ghz-4-6ghz-max-turbo-am4-video-integrado-8-nucleos-100-100000263box_1627588652_gg.jpg',
        title: 'AMD Ryzen 7 5700G, 3.8GHz (4.6GHz Max Turbo), AM4',
        price: '$499.99'
    }

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='ProductCard'
                    />
                    <Text
                        content='A complete product card where you can add the product to your cart, favorite it or share the link page.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <ProductCardComponent
                        addToCart={async () => { }}
                        imgUrl={product.url}
                        addToFavorites={async () => { }}
                        ratings='3'
                        title={product.title}
                        price={product.price}
                        priceOnCredit='10 x $99.9'
                        addToCartButtonTitle='Add to cart'
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
                    const product = {
                        url: 'https://images.kabum.com.br/produtos/fotos/181089/processador-amd-ryzen-7-5700g-3-8ghz-4-6ghz-max-turbo-am4-video-integrado-8-nucleos-100-100000263box_1627588652_gg.jpg',
                        title: 'AMD Ryzen 7 5700G, 3.8GHz (4.6GHz Max Turbo), AM4',
                        price: '$499.99'
                    }
                "
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    <ProductCardComponent
                    addToCart={async () => { }}
                    imgUrl={product.url}
                    addToFavorites={async () => { }}
                    ratings='3'
                    title={product.title}
                    price={product.price}
                    priceOnCredit='10 x $99.9'
                    addToCartButtonTitle='Add to cart'
                    />"
                    hideTitle
                />
            </ComponentContainer>
        </Container>
    )
}