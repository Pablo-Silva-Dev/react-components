import { ChangeEvent, FormEvent } from 'react'

import Head from 'next/head'
import { SubTitle } from '../components/Typography/SubTitle'
import { Title } from '../components/Typography/Title'
import { Text } from '../components/Typography/Text'
import { Header } from '../components/Elements/Header'
import { useState } from 'react'
import { ResponsiveMenu } from '../components/Elements/ResponsiveMenu'
import { TextInput } from '../components/Forms/TextInput'
import { Container } from '../styles'

import { FiAlertCircle } from 'react-icons/fi'
import { EmailInput } from '../components/Forms/EmailInput'
import { PasswordInput } from '../components/Forms/PasswordInput'
import { Loading } from '../components/Animations/Loading'
import { SubmitButton } from '../components/Forms/SubmitButton'
import { PrimaryButton } from '../components/Elements/PrimaryButton'
import { SecondaryButton } from '../components/Elements/SecondaryButton'
import NextProgressComponent from '../components/Next/NextProgress'
import { InfoCard } from '../components/Elements/Cards/InfoCard'
import { useTheme } from 'styled-components'
import { PricingCard } from '../components/Elements/PricingCard'
import { Footer } from '../components/Elements/Footer'
import { ImageSlider } from '../components/Elements/ImageSlider'
import { FooterLink } from '../components/Elements/Footer/FooterLink'
import { FooterFirstSection } from '../components/Elements/Footer/FooterFirstSection'
import { FooterTitle } from '../components/Elements/Footer/FooterTitle'
import { FooterSecondSection } from '../components/Elements/Footer/FooterSecondSection'
import { FooterThirdSection } from '../components/Elements/Footer/FooterThirdSection'
import { FooterFourthSection } from '../components/Elements/Footer/FooterFourthSection'
import { FooterFivethSection } from '../components/Elements/Footer/FooterFivethSection'
import { FooterSixthSection } from '../components/Elements/Footer/FooterSixthSection'
import { RevealFade } from '../components/Animations/Reveal/RevealFade'
import { CountUpAnimation } from '../components/Animations/Loading/CountUp'
import { TitleCard } from '../components/Elements/Cards/TitleCard'
import { ImageCard } from '../components/Elements/Cards/ImageCard'
import { TestimonialCard } from '../components/Elements/Cards/TestimonialCard'
import { GroupInfo } from '../components/Elements/GroupInfo'
import { MdConnectWithoutContact } from 'react-icons/md'
import { NewsletterCard } from '../components/Elements/Cards/NewsletterCard'
import { GoogleMap } from '../components/Elements/GoogleMap'
import { VideoModal } from '../components/Modals/VideoModal'
import Collapsible from 'react-collapsible'
import { CollapsibleInfo } from '../components/Elements/CollapsibleInfo'
import { GradientText } from '../components/Typography/GradientText'
import { ProductCard } from '../components/Elements/ProductCard'




export default function Home() {

  const theme = useTheme()

  const [isResponsiveMenuOpen, setIsResponsiveMenuOpen] = useState(false)
  const [favorited, setFavorited] = useState(true)
  const [onCart, setOnCart] = useState(false)

  function openResponsiveMenu() {
    setIsResponsiveMenuOpen(!isResponsiveMenuOpen)
  }
  function closeResponsiveMenu() {
    setIsResponsiveMenuOpen(!isResponsiveMenuOpen)
  }



  return (
    <Container>
      <Head>
        <title>PSD - React Components</title>
      </Head>
      <NextProgressComponent />
      <Header
        firstUrlTitle='Home'
        firstUrlLink='/test'
        secondUrlTitle='ssdfsdfsdfdfjh'
        secondUrlLink='sdjsdfsdfdffh'
        thirdUrlTitle='sdfsdfsdfjh'
        thirdUrlLink='sdsdfsdfsdfjfh'
        fourthUrlTitle='sdfjsdfsdfhsdf'
        fourthUrlLink='sdsdfdsfjfh'
        fivethUrlTitle='sdfdfsdfdsfjhsdf'
        fivethUrlLink='sdjsdfsdfdffh'
        sixthUrlTitle='sdfjfdfffhsdf'
        sixthUrlLink='sddfdsfsdfjfh'
        logoImageAlt='sdfsdfsdfsdf'
        logoImagePath='/logo.png'
        openResponsiveMenu={openResponsiveMenu}
      />
      {isResponsiveMenuOpen &&
        <ResponsiveMenu
          direction='horizontal'
          firstUrlTitle='Home'
          firstUrlLink='sdfsdfsdfsdf'
          secondUrlTitle='ssdfsdfsdfdfjh'
          secondUrlLink='sdjsdfsdfdffh'
          thirdUrlTitle='sdfsdfsdfjh'
          thirdUrlLink='sdsdfsdfsdfjfh'
          fourthUrlTitle='sdfjsdfsdfhsdf'
          fourthUrlLink='sdsdfdsfjfh'
          fivethUrlTitle='sdfdfsdfdsfjhsdf'
          closeResponsiveMenu={closeResponsiveMenu}
        />
      }
      <InfoCard
        title='Soluções para empresas'
        content='skdjfskdhfkjsfdhsdkfj'
      />

      <PricingCard
        title='Assinatura anual'
        totalPrice='399,90'
        dealsPrice='299,99'
        finishPurchase={() => { }}
        oldPrice='499,29'
        firstResourceText='Acesso vip'
      />

      <TitleCard
        title='Some title'
        content='Some content sjdfh sjldfhsl dlsfsjdf dfjdf dfjd dfdf dfdf fdf  df dfkdf sdkf dfl'
      />

      <ImageCard
        imgAlt='PSD'
        imgUrl='/img1.jpg'
        imgDescription='sdfsdlifhsdilfddfgdfgdfgdfgdfgdfgdfgdfgdfgdfxgdfgfsdfsdfsdfsdf'
        imgTitle='SJDF'
      />
      <TestimonialCard
        alt='PSD'
        personPhotoUrl='/img1.jpg'
        personRole='Programador'
        ratings={2.5}
        testimonial='sdfsdlifhsdilfddfgdfgdfgdfgdfgdfgfddfgdfgdfgdfgdfgdfgdfgdfgdfgdfxgdfddfgdfgdfgdfgdfgdfgdfgdfgdfgdfxgddfgdfgdfgdfxgdfddfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfxgdfddfgdfgdfgdfgdfgdfgdfgdfgdfgdfxgdfddfgdfgdfgdfgdfgdfgdfgdfgdfgdfxgdfgfsdfsdfsdfsdf'
        personName='Pablo Silva'
      />

      <ProductCard 
        addToCart={async () => {}}
        addToFavorites={async () => {}}
        removeFromFavorites={async () => {}}
        imgUrl='https://images.kabum.com.br/produtos/fotos/113405/monitor-lg-led-25-full-hd-ips-hdmi-1ms-25um58-g_1591183670_gg.jpg'
        imgAlt='PSD'
        title='Monitor Gamer LG 25 IPS, Ultra Wide, 75 Hz, Full HD, 99% sRGB, HDMI, VESA - 25UM58-G'
        price='R$1059,99'
        ratings={4.5}
        priceOnCredit='Ou até 12x de R$89,90 no cartão'
        share={async () => {}}
        isFavorited={favorited}
        isOnCard={onCart}
      />


      <Footer>
        <FooterFirstSection>
          <FooterTitle
            content='Departamento'
          />
          <FooterLink
            content='Placas de vídeo'
            url='/'
          />
        </FooterFirstSection>
        <FooterSecondSection>
          <FooterTitle
            content='Departamento'
          />
          <FooterLink
            content='Placas de vídeo'
            url='/'
          />
        </FooterSecondSection>
        <FooterThirdSection>
          <FooterTitle
            content='Departamento'
          />
          <FooterLink
            content='Placas de vídeo'
            url='/'
          />
        </FooterThirdSection>
        <FooterFourthSection>
          <FooterTitle
            content='Departamento'
          />
          <FooterLink
            content='Placas de vídeo'
            url='/'
          />
          <FooterLink
            content='Placas de vídeo'
            url='/'
          />
          <FooterLink
            content='Placas de vídeo'
            url='/'
          />
        </FooterFourthSection>
        <FooterFivethSection>
          <FooterTitle
            content='Departamento'
          />
          <FooterLink
            content='Placas de vídeo'
            url='/'
          />
        </FooterFivethSection>
        <FooterSixthSection>
          <FooterTitle
            content='Departamento'
          />
          <FooterLink
            content='Placas de vídeo'
            url='/'
          />
        </FooterSixthSection>
      </Footer >
    </Container>
  )
}
