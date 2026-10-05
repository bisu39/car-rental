import Hero from '../components/Hero.jsx'
import InfoBlocks from '../components/InfoBlocks.jsx'
import TopCars from '../components/TopCars.jsx'
import HomeBanner from '../components/HomeBanner.jsx'
import SecondBanner from '../components/SecondBanner.jsx'
import MobileApp from '../components/MobileApp.jsx'

const Home = () => {
  return (
    <main>
      <div className='mb-20 lg:mb-30'>
        <Hero />
        <InfoBlocks />
        <TopCars />
        <HomeBanner />
        <MobileApp />
        <SecondBanner />
      </div>
    </main>

  )
}

export default Home
