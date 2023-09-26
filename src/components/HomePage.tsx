
import Arrowdown from '../assets/arrowdown.svg'

const HomePage = () => {
  return (
    <div className="bg-black text-white pb-8 herobg">
      <div className="container mx-auto py-12 p-4">
        <div className="flex flex-col text-center items-center justify-center">
          <div className="text-center py-4">
            <p className='pb-4 text-xl'>
              Welcome</p>
            <h1 className="text-5xl font-bold md:text-7xl lg:text-8xl text-orange-600">Mr Garage Automobile Service</h1>
          </div>

          <div className='lg:w-1/3 py-6'>
            <p className='text-blue-900 font-bold italic text-xl'>Best Autombile industry in the city of Tema, taking your car maintenance and repairs to a stress-free level</p>
          </div>

          <div className='py-4'>
            <img src={Arrowdown} alt="Arrow down" className='w-12 animate-bounce cursor-pointer' />
            <p className='text-orange-700'>scroll down</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage