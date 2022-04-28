import type { NextPage } from 'next'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import { Marte } from '../components/Marte'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Marte />
    </>
  )
}

export default Home
