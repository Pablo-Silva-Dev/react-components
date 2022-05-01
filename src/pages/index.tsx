import Head from 'next/head'
import { SubTitle } from '../components/Typography/SubTitle'
import { Title } from '../components/Typography/Title'
import { Text } from '../components/Typography/Text'
import { Header } from '../components/Elements/Header'
import { useState } from 'react'
import { ResponsiveMenu } from '../components/Elements/ResponsiveMenu'

export default function Home() {

  const [isResponsiveMenuOpen, setIsResponsiveMenuOpen] = useState(false)

  function openResponsiveMenu() {
    setIsResponsiveMenuOpen(!isResponsiveMenuOpen)
  }
  function closeResponsiveMenu() {
    setIsResponsiveMenuOpen(!isResponsiveMenuOpen)
  }

  return (
    <div>
      <Head>
        <title>PSD - React Components</title>
      </Head>
      <Header
        firstUrlTitle='Home'
        firstUrlLink='sdfsdfsdfsdf'
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
        showsAuthenticationContainer
      />
      {isResponsiveMenuOpen &&
        <ResponsiveMenu
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
    </div>
  )
}
