import { Link } from 'react-router-dom'
import Arrowup from '../assets/arrowrightup.svg'

const Cta = () => {
  return (
    <div>
        <div className="container mx-auto ">
            <div className='flex lg:flex-row flex-col justify-between items-center bg-gray-900 p-6 rounded-2xl '>
                <div className='p-4'>
                    <p className='text-3xl pb-4 md:text-4xl text-gray-300'>Do you need any of our services ?</p>
                    <p className='text-xl md:text-xl text-gray-400'>Yeah, thats easy !</p>
                </div>

                <div className='w-full p-2 bg-orange-500 md:w-32 rounded-md'>    
                    <div className='flex flex-row text-center pl-6 md:pl-0 space-x-6'>
                        <Link to={'/booking'}>
                        Make a booking
                        <img src={Arrowup} alt="arrow" className=' animate-spin w-6'/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cta