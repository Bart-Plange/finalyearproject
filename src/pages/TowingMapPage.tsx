import { TowingCenterPage } from '.'
import { Navigation } from '../components'
import Footer from '../components/Footer'
import TowingMap from '../components/TowingMap'

const TowingMapPage = () => {
  return (
    
    <div>
      <Navigation />
      <div>
        <TowingCenterPage />
      </div>
    <div>
      <h1 className='text-orange-500 font-bold text-2xl p-4'>Welcome to towing maps page</h1>
      <TowingMap />
    </div>

      <Footer />
   </div>
  )
}

export default TowingMapPage