import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { PageInfo, Experience, Skill, Project, Social } from '@/typings'
import { fetchPageInfo } from '@/utils/fetchPageInfo'
import { fetchExperiences } from '@/utils/fetchExperiences'
import { fetchSkills } from '@/utils/fetchSkills'
import { fetchProjects } from '@/utils/fetchProjects'
import { fetchSocials } from '@/utils/fetchSocials'


const inter = Inter({ subsets: ['latin'] })

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}


export default function Home({pageInfo, experiences, skills, projects, socials}: Props) {
  return (
    <div className='bg-[#ecf0f3] text-[#1f2937] h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#5a87c5]/80
     scroll-smooth'>
      <Head>
        <title>Kevin's Portfolio</title>
        <meta name="description" content="Nextjs Sanity Ts Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header socials={socials}/>

      {/* Hero */}
      <section id="hero" className='snap-center'>
      <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className='snap-center'>
        <About/>
      </section>

      {/* Experience */}
      <section id="experience" className='snap-center'>
        <WorkExperience />
      </section>

      {/* Skills */}
      <section id="skills" className='snap-start'>
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className='snap-start'>
        <Projects />
      </section>

      {/* Contact */}


      {/* Footer */}
      <Link href='#hero'>
      <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div className='flex items-center justify-center'>
          <img src="/images/kevin.png" alt="" className='w-10 h-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'/>
        </div>
      </footer>
      </Link>

    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo = await fetchPageInfo()
  const experiences = await fetchExperiences()
  const skills = await fetchSkills()
  const projects = await fetchProjects()
  const socials = await fetchSocials()

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials

    },
    revalidate: 10
  }

}
