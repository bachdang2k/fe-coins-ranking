import Head from 'next/head'
import Navbar from "../../components/Navbar";
import { useRouter } from 'next/router';
import CoinChartContainer from '../../components/CoinChartContainer';

export default function CoinHome() {

  const router = useRouter();
  const { slug } = router.query;

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
        <CoinChartContainer slug={slug} />
      </main>
    </div>
  )
}