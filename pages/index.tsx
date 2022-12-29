import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Feed />
      <Modal />
    </div>
  )
}

export default Home
