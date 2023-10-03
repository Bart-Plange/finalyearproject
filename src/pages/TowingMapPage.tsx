
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
        <div className='p-4'>
          <TowingMap center={{ lat: 5.614818, lng: -0.205874 }} zoom={12} markers={[]} />
        </div>

    </div>

      <Footer />
   </div>
  )
}

export default TowingMapPage