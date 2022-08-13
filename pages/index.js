import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div>
      <Main/>
      <Projects/>
      <Contact/>
    </div>
  )
}
