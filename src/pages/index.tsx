import Head from 'next/head'
import { Title } from '../components/Typography/Title'

export default function Home() {
  return (
    <div>
      <Head>
        <title>PSD - React Components</title>
      </Head>
      <Title
        content='sdfsdf'
      />
      <button>OK</button>
    </div>
  )
}
