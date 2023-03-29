import Head from 'next/head'
import Navbar from "../components/Navbar";
import CoinList from "../components/CoinList";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Crypto Rankings</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main>
        <CoinList/>
      </main>
    </div>
  )
}
