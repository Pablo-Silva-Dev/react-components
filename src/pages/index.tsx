import { ChangeEvent, FormEvent } from 'react'
import 'react-vertical-timeline-component/style.min.css';

import * as AnimationCoding from '../../public/react_animation.json'

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
import { RevealFade } from '../components/Animations/RevealFade'
import { CountUpAnimation } from '../components/Animations/CountUp'
import { TitleCard } from '../components/Elements/Cards/TitleCard'
import { ImageCard } from '../components/Elements/Cards/ImageCard'
import { TestimonialCard } from '../components/Elements/Cards/TestimonialCard'
import { GroupInfo } from '../components/Elements/GroupInfo'
import { MdConnectWithoutContact, MdEmail } from 'react-icons/md'
import { NewsletterCard } from '../components/Elements/Cards/NewsletterCard'
import { GoogleMap } from '../components/Elements/GoogleMap'
import { VideoModal } from '../components/Modals/VideoModal'
import Collapsible from 'react-collapsible'
import { CollapsibleInfo } from '../components/Elements/CollapsibleInfo'
import { GradientText } from '../components/Typography/GradientText'
import { ProductCard } from '../components/Elements/Cards/ProductCard'
import { ContactCard } from '../components/Elements/Cards/ContactCard'
import { Switcher } from '../components/Forms/Switch'
import { CheckBox } from '../components/Forms/CheckBox'
import { Avatar } from '../components/Elements/Avatar'
import { StarsRatingCard } from '../components/Elements/Cards/StarsRatingCard'
import { ProfileCard } from '../components/Elements/Cards/ProfileCard'
import { LottieAnimation } from '../components/Animations/Lottie'
import { Timeline } from '../components/Elements/Timeline'
import { TimelineElement } from '../components/Elements/Timeline/TimelineElement';
import { TextTyping } from '../components/Animations/TextTyping';
import { Select } from '../components/Forms/Select';
import { TextArea } from '../components/Forms/TextArea';
import { RadioGroup } from '../components/Forms/RadioGroup';

export default function Home() {

  const theme = useTheme()

  const optionsTest = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const [isResponsiveMenuOpen, setIsResponsiveMenuOpen] = useState(false)
  const [select, setSelect] = useState('');
  const [favorited, setFavorited] = useState(true)
  const [onCart, setOnCart] = useState(false)
  const [option, setOption] = useState('')
  const [check, setCheck] = useState(false)

  function openResponsiveMenu() {
    setIsResponsiveMenuOpen(!isResponsiveMenuOpen)
  }
  function closeResponsiveMenu() {
    setIsResponsiveMenuOpen(!isResponsiveMenuOpen)
  }

  function toggleCheck() {
    setCheck(!check)
  }


  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelect(value);
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

      <TextTyping
        firstText='React is a good tool'
        secondText='NodeJS is a good tool'
        firstTextDelay={2000}
        secondTextDelay={300}
        repeat={2}
        wrapper='h2'
      />

      <Select
        name='Some name'
        options={optionsTest}
        onChange={e => setOption(e.target.value)}
        selectPlaceholder='Defina uma comida'
      />

      <p>{option}</p>

      <TextArea
      />

      <RadioGroup
        name='Some name'
        options={optionsTest}
        onChange={handleSelectChange}
        checked={select === select}
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
