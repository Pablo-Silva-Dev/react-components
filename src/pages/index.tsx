import { ChangeEvent, FormEvent } from 'react'

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
import { Loading } from '../components/Animations/Loading'
import { SubmitButton } from '../components/Forms/SubmitButton'

export default function Home() {

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
      <form onSubmit={sendData}>

        <SubmitButton
          loading={loading}
          title='Enviar'
          disabled={loading}
        />
      </form>
    </Container>
  )
}
