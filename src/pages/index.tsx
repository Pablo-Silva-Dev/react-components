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
import { MdConnectWithoutContact} from 'react-icons/md'



export default function Home() {

  const theme = useTheme()

  const [isResponsiveMenuOpen, setIsResponsiveMenuOpen] = useState(false)
  const [visiblePassword, setVisiblePassword] = useState(true)
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('fdfs')

  function openResponsiveMenu() {
    setIsResponsiveMenuOpen(!isResponsiveMenuOpen)
  }
  function closeResponsiveMenu() {
    setIsResponsiveMenuOpen(!isResponsiveMenuOpen)
  }

  async function sendData(e: FormEvent) {

    e.preventDefault()
    setLoading(true)

    const timing = await setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timing)
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
      <Title
        content='sdfsdf'
      />
      <SubTitle
        content='sdfsdf'
      />
      <Text
        content='sdfsdf'
      />
      <TextInput
        value={input}
        icon={<FiAlertCircle />}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
      />
      <EmailInput
        value={input}
        showsIcon
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
      />
      <PasswordInput
        value={input}
        showsIcon
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
        togglePassword={() => setVisiblePassword(!visiblePassword)}
        passwordIsVisible={visiblePassword}
      />
      <form onSubmit={sendData}>

        <SubmitButton
          loading={loading}
          title='Enviar'
          disabled={loading}
        />
      </form>
      <PrimaryButton
        loading={loading}
        title='Enviar'
        disabled={loading}
        onClick={() => { }}
      />
      <SecondaryButton
        loading={loading}
        title='Enviar'
        disabled={loading}
        onClick={() => { }}
      />
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
        stars={5}
        testimonial='sdfsdlifhsdilfddfgdfgdfgdfgdfgdfgfddfgdfgdfgdfgdfgdfgdfgdfgdfgdfxgdfddfgdfgdfgdfgdfgdfgdfgdfgdfgdfxgddfgdfgdfgdfxgdfddfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfxgdfddfgdfgdfgdfgdfgdfgdfgdfgdfgdfxgdfddfgdfgdfgdfgdfgdfgdfgdfgdfgdfxgdfgfsdfsdfsdfsdf'
        personName='SJDF'
      />

     <GroupInfo
      title='Fast'
      content='Most fast in the country'
     >
       <MdConnectWithoutContact size={32} color='red'/>
     </GroupInfo>


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
