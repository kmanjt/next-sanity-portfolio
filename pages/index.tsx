import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[#ecf0f3] text-[#1f2937] h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Kevin's Portfolio</title>
        <meta name="description" content="Nextjs Sanity Ts Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className='snap-center'>
      <Hero />
      </section>

      {/* About */}
      <section id="about" className='snap-center'>
        <About/>
      </section>

      {/* Experience */}
      <section id="experience" className='snap-center'>
        <Experience />
      </section>

      {/* Skills */}

      {/* Projects */}

      {/* Contact */}
    </div>
  )
}
