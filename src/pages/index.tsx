import { ChangeEvent } from 'react'

import Head from 'next/head'
import { SubTitle } from '../components/Typography/SubTitle'
import { Title } from '../components/Typography/Title'
import { Text } from '../components/Typography/Text'
import { Header } from '../components/Elements/Header'
import { useState } from 'react'
import { ResponsiveMenu } from '../components/Elements/ResponsiveMenu'
import NextProgress from 'next-progress'
import { TextInput } from '../components/Forms/TextInput'
import { Container } from '../styles'

import { FiAlertCircle } from 'react-icons/fi'
import { EmailInput } from '../components/Forms/EmailInput'
import { PasswordInput } from '../components/Forms/PasswordInput'

export default function Home() {

  const [isResponsiveMenuOpen, setIsResponsiveMenuOpen] = useState(false)
  const [visiblePassword, setVisiblePassword] = useState(true)
  const [input, setInput] = useState('fdfs')

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
      <NextProgress options={{ showSpinner: false }} />
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
          direction='vertical'
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
      <p>{input}</p>
    </Container>
  )
}
