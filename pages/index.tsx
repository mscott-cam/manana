import type { NextPage } from 'next'
import Head from 'next/head'
import { TopNavbar } from 'components/top-navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mañana Co.</title>
      </Head>
      <TopNavbar />
      {/* <main></main>
      <footer></footer> */}
    </div>
  )
}

export default Home
