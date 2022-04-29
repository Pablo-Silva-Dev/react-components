import Head from 'next/head'
import { SubTitle } from '../components/Typography/SubTitle'
import { Title } from '../components/Typography/Title'
import { Text } from '../components/Typography/Text'

export default function Home() {
  return (
    <div>
      <Head>
        <title>PSD - React Components</title>
      </Head>
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
