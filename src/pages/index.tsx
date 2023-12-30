import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/layout'
import { ReactElement } from 'react'

 const Home = () => {
  return (
    <div> This is the home page </div>
  )
}
export default Home;

Home.getLayout = function getLayout(page: ReactElement){
  return <Layout>{page}</Layout>
}
