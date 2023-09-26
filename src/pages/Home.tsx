import { About, HomePage, Cta, CarsServices, Navigation, Services,ChatWidget } from '../components'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div className=" text-white pb-8">
      <Navigation />
      <HomePage />
      <CarsServices />
      <Cta />  
      <About />
      <Services />
      <ChatWidget />
      <Footer />
    </div>
  )
}

export default Home