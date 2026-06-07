import Nav from './components/Nav'
import Hero from './components/Hero'
import ResearchQuestion from './components/ResearchQuestion'
import DataSection from './components/DataSection'
import Methods from './components/Methods'
import Results from './components/Results'
import Takeaways from './components/Takeaways'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <ResearchQuestion />
        <DataSection />
        <Methods />
        <Results />
        <Takeaways />
      </main>
      <Footer />
    </>
  )
}
