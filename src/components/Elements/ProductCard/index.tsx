import Image from 'next/image'
import {
  MdFavoriteBorder,
  MdOutlineFavorite,
  MdOutlineStarPurple500,
  MdShare,
  MdShoppingCart
} from 'react-icons/md'
import { useTheme } from 'styled-components';
import StarRatings from 'react-star-ratings'

import {
  Container,
  RatingsContainer,
  Title,
  PurchaseButton,
  FavoriteButton,
  PriceText,
  Text,
  PriceOnCreditText,
  ShareButton,
} from './styles';

interface ProductCardProps {
  title: string;
  price: string;
  priceOnCredit: string;
  imgUrl: string;
  imgAlt: string;
  ratings: 1 | 2 | 3 | 4 | 5 | 1.5 | 2.5 | 3.5 | 4.5 | 5.5;
  addToCart: () => Promise<void>;
  addToFavorites: () => Promise<void>;
  removeFromFavorites?: () => Promise<void>;
  share?: () => Promise<void>;
  isOnCard?: boolean;
  isFavorited?: boolean;
}

export function ProductCard({
  title,
  price,
  priceOnCredit,
  ratings,
  imgUrl,
  imgAlt,
  addToCart,
  addToFavorites,
  isOnCard,
  isFavorited,
  removeFromFavorites,
  share
}: ProductCardProps) {

  const theme = useTheme()

  return (
    <Container>
      {isFavorited ?
        <FavoriteButton
          onClick={removeFromFavorites}
        >
          <MdOutlineFavorite
            color={theme.colors.primary}
            size={24}
          />
        </FavoriteButton>
        :
        <FavoriteButton
          onClick={addToFavorites}
        >
          <MdFavoriteBorder
            color={theme.colors.element_base}
            size={24}
          />
        </FavoriteButton>
      }
      <ShareButton>
        <MdShare
          color={theme.colors.silver}
          size={24}
        />
      </ShareButton>
      <Title>
        {title.length > 72 ? title.substring(0, 72).concat('...') : title}
      </Title>
      <Image
        src={imgUrl}
        width={200}
        height={200}
        alt={imgAlt}
      />
      <RatingsContainer>
        <StarRatings
          rating={ratings}
          starRatedColor="#ffc400"
          numberOfStars={5}
          starDimension="20px"
          starSpacing="2px"
          name='rating'
        />
      </RatingsContainer>
      <PriceText>
        {price}
      </PriceText>
      <Text>À vista no PIX</Text>
      <PriceOnCreditText>
        {priceOnCredit}
      </PriceOnCreditText>
      {isOnCard ?

        <Title>
          Adicionado ao carrinho
        </Title>
        :
        <PurchaseButton
          onClick={addToCart}
        >
          <MdShoppingCart
            color={theme.colors.element_base}
            size={24}
          />
          Adicionar ao carrinho
        </PurchaseButton>

      }
    </Container>
  )
}