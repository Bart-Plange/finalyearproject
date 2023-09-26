import bmw from '../assets/cars/bmw.svg'
import benz from '../assets/cars/msbenx.png'
import nissan from '../assets/cars/nissan.svg'
import toyota from '../assets/cars/toyota.svg'
import volvo from '../assets/cars/volvo.svg'

const CarsSerives = () => {
  return (
    <div>
        <div className='container mx-auto'>
            <p className='pb-6 md:pl-16 md:ml-10 text-orange-500 text-4xl'>Trusted by many brands</p>
            <div className='flex flex-row space-x-2 md:space-x-8 items-center justify-evenly'>
                <img src={bmw} alt="bmw" className='w-12'/>
                <img src={benz} alt="benz" className='w-12'/>
                <img src={nissan} alt="nissan" className='w-12'/>
                <img src={toyota} alt="toyato"className='w-12' />
                <img src={volvo} alt="volvo" className='w-12 '/>
            </div>
        </div>
    </div>
  )
}

export default CarsSerives