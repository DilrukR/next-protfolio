import Head from "next/head";
import Header from "../Components/Header";
import Hero from "../Components/Hero";

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory  overflow-scroll z-0'>
      <Head>
        <title>Rishan Dilruk Protfolio</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <section id='hero' className=' snap-center'>
        <Hero />
      </section>
    </div>
  );
}
