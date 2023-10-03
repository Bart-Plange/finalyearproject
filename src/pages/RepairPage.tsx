import { useState } from "react";
import { Navigation } from "../components";
import Footer from "../components/Footer";
import ServiceRequestPopup from "../components/ServiceRequestPopup";
import { useNavigate } from "react-router-dom";
import TransmissionImage from '../assets/TransmissionImg.jpeg'
import SuspensionImage from '../assets/SuspensionImg.jpeg'
import ExhaustImage from '../assets/ExhaustImg.jpeg'
import ElectricalImage from '../assets/ElectriaclImg.jpeg'
import CoolingImage from '../assets/CoolingImg.jpeg'
import FuelImage from '../assets/FuelImg.jpeg'
const RepairServices = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleContactClick = () => {
    navigate('/contact');
    setIsPopupOpen(false);
  };

  const handleBookingClick = () => {
    navigate('/booking');
    setIsPopupOpen(false);
  };

  return (
    <div>
      <Navigation />
      <div className="container">
        <div>
          <p className="text-orange-500 text-3xl font-bold pb-4">Welcome to our Repair Services Page</p>
          <p className="text-gray-400 pb-4">Explore our repair services and request yours</p>
        </div>
        <div className="">
          {/* Transmission Service */}
          <div className="flex flex-col md:flex-row justify-between md:space-x-6 bg-white mb-8">
            <div className="p-4 w-1/2">
              <h2 className="p-2 text-green-500 font-bold text-2xl">Transmission Services</h2>
              <div className="bg-blue-500 h-1 w-1/2 ml-2 md:ml-0" />
              <p className="text-gray-500 py-8 md:py-12">
                Our expert technicians provide transmission fluid changes and transmission system repairs to ensure smooth gear shifting and optimal performance.
              </p>
              <button
                onClick={() => handleOpenPopup()}
                className="text-white text-md bg-blue-500 p-3 rounded-lg hover:bg-blue-200 hover:text-blue-900 transition-all hover:font-bold">
                Request Service
              </button>
            </div>

            {/* You can include an image related to Transmission Services here */}
            <div className="pl-4 md:pt-16 lg:pt-12 w-1/2">
              <img src={TransmissionImage} alt="Transmission Service" className="object-contain w-2/3" />
            </div>

            {isPopupOpen && (
              <ServiceRequestPopup
                onClose={handleClosePopup}
                onContact={handleContactClick}
                onBooking={handleBookingClick}
              />
            )}
          </div>

          {/* Suspension and Steering */}
          <div className="flex flex-col md:flex-row justify-between md:space-x-6 bg-white mb-8">
            <div className="p-4 w-1/2">
              <h2 className="p-2 text-green-500 font-bold text-2xl">Suspension and Steering Services</h2>
              <div className="bg-blue-500 h-1 w-1/2 ml-2 md:ml-0" />
              <p className="text-gray-500 py-8 md:py-12">
                We offer suspension and steering system repairs to ensure your vehicle handles smoothly and safely. Trust us for improved control and stability.
              </p>
              <button
                onClick={() => handleOpenPopup()}
                className="text-white text-md bg-blue-500 p-3 rounded-lg hover:bg-blue-200 hover:text-blue-900 transition-all hover:font-bold">
                Request Service
              </button>
            </div>

            {/* You can include an image related to Suspension and Steering Services here */}
            <div className="pl-4 md:pt-16 lg:pt-12 w-1/2">
              <img src={SuspensionImage} alt="Suspension and Steering Service" className="object-contain w-2/3" />
            </div>

            {isPopupOpen && (
              <ServiceRequestPopup
                onClose={handleClosePopup}
                onContact={handleContactClick}
                onBooking={handleBookingClick}
              />
            )}
          </div>

          {/* Exhaust System Repairs */}
          <div className="flex flex-col md:flex-row justify-between md:space-x-6 bg-white mb-8">
            <div className="p-4 w-1/2">
              <h2 className="p-2 text-green-500 font-bold text-2xl">Exhaust System Repairs</h2>
              <div className="bg-blue-500 h-1 w-1/2 ml-2 md:ml-0" />
              <p className="text-gray-500 py-8 md:py-12">
                Our team specializes in exhaust system repairs, ensuring your vehicle's exhaust functions properly, reduces noise, and complies with emission standards.
              </p>
              <button
                onClick={() => handleOpenPopup()}
                className="text-white text-md bg-blue-500 p-3 rounded-lg hover:bg-blue-200 hover:text-blue-900 transition-all hover:font-bold">
                Request Service
              </button>
            </div>

            {/* You can include an image related to Exhaust System Repairs here */}
            <div className="pl-4 md:pt-16 lg:pt-12 w-1/2">
              <img src={ExhaustImage} alt="Exhaust System Repairs" className="object-contain w-2/3" />
            </div>

            {isPopupOpen && (
              <ServiceRequestPopup
                onClose={handleClosePopup}
                onContact={handleContactClick}
                onBooking={handleBookingClick}
              />
            )}
          </div>

          {/* Electrical System Repairs */}
          <div className="flex flex-col md:flex-row justify-between md:space-x-6 bg-white mb-8">
            <div className="p-4 w-1/2">
              <h2 className="p-2 text-green-500 font-bold text-2xl">Electrical System Repairs</h2>
              <div className="bg-blue-500 h-1 w-1/2 ml-2 md:ml-0" />
              <p className="text-gray-500 py-8 md:py-12">
                We diagnose and repair electrical system issues, ensuring your vehicle's lights, wiring, and components function correctly.
              </p>
              <button
                onClick={() => handleOpenPopup()}
                className="text-white text-md bg-blue-500 p-3 rounded-lg hover:bg-blue-200 hover:text-blue-900 transition-all hover:font-bold">
                Request Service
              </button>
            </div>

            {/* You can include an image related to Electrical System Repairs here */}
            <div className="pl-4 md:pt-16 lg:pt-12 w-1/2">
              <img src={ElectricalImage} alt="Electrical System Repairs" className="object-contain w-2/3" />
            </div>

            {isPopupOpen && (
              <ServiceRequestPopup
                onClose={handleClosePopup}
                onContact={handleContactClick}
                onBooking={handleBookingClick}
              />
            )}
          </div>

          {/* Cooling System Services */}
          <div className="flex flex-col md:flex-row justify-between md:space-x-6 bg-white mb-8">
            <div className="p-4 w-1/2">
              <h2 className="p-2 text-green-500 font-bold text-2xl">Cooling System Services</h2>
              <div className="bg-blue-500 h-1 w-1/2 ml-2 md:ml-0" />
              <p className="text-gray-500 py-8 md:py-12">
                We provide cooling system services, including radiator repair and coolant flushes, to prevent your vehicle from overheating and ensure optimal engine temperature.
              </p>
              <button
                onClick={() => handleOpenPopup()}
                className="text-white text-md bg-blue-500 p-3 rounded-lg hover:bg-blue-200 hover:text-blue-900 transition-all hover:font-bold">
                Request Service
              </button>
            </div>

            {/* You can include an image related to Cooling System Services here */}
            <div className="pl-4 md:pt-16 lg:pt-12 w-1/2">
              <img src={CoolingImage} alt="Cooling System Services" className="object-contain w-2/3" />
            </div>

            {isPopupOpen && (
              <ServiceRequestPopup
                onClose={handleClosePopup}
                onContact={handleContactClick}
                onBooking={handleBookingClick}
              />
            )}
          </div>

          {/* Fuel System Services */}
          <div className="flex flex-col md:flex-row justify-between md:space-x-6 bg-white mb-8">
            <div className="p-4 w-1/2">
              <h2 className="p-2 text-green-500 font-bold text-2xl">Fuel System Services</h2>
              <div className="bg-blue-500 h-1 w-1/2 ml-2 md:ml-0" />
              <p className="text-gray-500 py-8 md:py-12">
                We offer fuel system services, including fuel filter replacement and injector cleaning, to ensure proper fuel delivery and engine performance.
              </p>
              <button
                onClick={() => handleOpenPopup()}
                className="text-white text-md bg-blue-500 p-3 rounded-lg hover:bg-blue-200 hover:text-blue-900 transition-all hover:font-bold">
                Request Service
              </button>
            </div>

            {/* You can include an image related to Fuel System Services here */}
            <div className="pl-4 md:pt-16 lg:pt-12 w-1/2">
              <img src={FuelImage} alt="Fuel System Services" className="object-contain w-2/3" />
            </div>

            {isPopupOpen && (
              <ServiceRequestPopup
                onClose={handleClosePopup}
                onContact={handleContactClick}
                onBooking={handleBookingClick}
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RepairServices;
