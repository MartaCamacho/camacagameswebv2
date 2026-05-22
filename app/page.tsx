import { Nav }    from '@/components/Nav'
import { Hero }   from '@/components/Hero'
import { Games }  from '@/components/Games'
import { About }  from '@/components/About'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Games />
        <About />
      </main>
      <Footer />
    </>
  )
}
