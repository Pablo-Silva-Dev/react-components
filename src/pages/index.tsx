import { ChangeEvent, FormEvent } from 'react'
import 'react-vertical-timeline-component/style.min.css';

import * as AnimationCoding from '../../public/react_animation.json'

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
import { StepProgress } from '../components/Elements/StepProgress';
import { ModalBox } from '../components/Modals/ModalBox';
import { SignUpForm } from '../components/Forms/SignUpForm';
import { DropdownSelect } from '../components/Elements/DropdownSelect';
import SearchInput from '../components/Elements/SearchInput';
import {  ListLink } from '../components/Elements/List';


export default function Home() {


  const list = [
    {content: 'Placas de vídeo', url:'/', iconName:'like'},
    {content: 'Memorias ram', url:'/'},
    {content: 'Processadores', url:'/', iconName:'like'},
    {content: 'Monitores', url:'/', iconName:'like'},
    {content: 'Armazenamento', url:'/d'},
  ]


  return (
    <Container>
      <SearchInput
        placeholder='Faça uma busca'
      />
      <ListLink
        items={list}
        stripped
        iconsStyle={{
          color: 'orange',
        }}
        iconsSize={22}
     
      />
    </Container>
  )
}