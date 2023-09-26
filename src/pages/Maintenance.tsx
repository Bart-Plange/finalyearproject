import { useState } from "react";
import { Navigation } from "../components";
import Footer from "../components/Footer";
import ServiceRequestPopup from "../components/ServiceRequestPopup";
import { Alignment, Brakepad, Diagnostics, Oilchange } from "./Product/data";
import { useNavigate } from "react-router-dom";

const Maintenance = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Corrected to set isPopupOpen to false
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
          <p className="text-orange-500 text-3xl font-bold pb-4">Welcome to our maintenance Page</p>
          <p className="text-gray-400 pb-4">Explore our multiple services and request yours</p>
        </div>
        <div className="">
          {/* Diagnostic service */}
          <div className="flex flex-col md:flex-row justify-between md:space-x-6 bg-white mb-8">
            <div className="p-4">
              <h2 className="p-2 text-green-500 font-bold text-2xl">Diagnostic Services</h2>
              <div className="bg-blue-500 h-1 w-1/2 ml-2 md:ml-0" />
              <p className="text-gray-500 py-8 md:py-12">
                At Mr Garage Automobiles, we take your vehicle through all kinds of diagnostics and checks. We make sure your vehicle is fit for the road and ready to respond to your speed.
              </p>
              <button
                onClick={() => handleOpenPopup()}
                className="text-white text-md bg-blue-500 p-3 rounded-lg hover:bg-blue-200 hover:text-blue-900 transition-all hover:font-bold">
                Request Service
              </button>
            </div>

            <div className="pl-4 md:pt-16 lg:pt-12">
              <img src={Diagnostics} alt="Diagnostics machine" className="object-contain w-2/3" />
            </div>

            {isPopupOpen && (
              <ServiceRequestPopup
                onClose={handleClosePopup}
                onContact={handleContactClick}
                onBooking={handleBookingClick}
              />
            )}
          </div>

          {/* Oil replacements */}
          <div className="flex flex-col md:flex-row justify-between md:space-x-6 bg-white mb-8 pb-2">
            <div className="p-4">
              <h2 className="p-2 text-green-500 font-bold text-2xl">Oil Replacement</h2>
              <div className="bg-blue-500 h-1 w-1/2 ml-2 md:ml-0" />
              <p className="text-gray-500 py-8 md:py-12">
                Keep your engine running smoothly with our high-quality oil replacement service. We use premium oils that ensure optimal engine performance and longevity.
              </p>
              <button
                onClick={() => handleOpenPopup()}
                className="text-white text-md bg-blue-500 p-3 rounded-lg hover:bg-blue-200 hover:text-blue-900 transition-all hover:font-bold">
                Request Service
              </button>
            </div>
            <div className="pl-4 md:pt-16 lg:pt-12">
              <img src={Oilchange} alt="Diagnostics machine" className="object-contain w-2/3" />
            </div>

            {isPopupOpen && (
              <ServiceRequestPopup
                onClose={handleClosePopup}
                onContact={handleContactClick}
                onBooking={handleBookingClick}
              />
            )}
          </div>

          {/* Alignment service */}
          <div className="flex flex-col md:flex-row justify-between md:space-x-6 bg-white mb-8">
            <div className="p-4">
              <h2 className="p-2 text-green-500 font-bold text-2xl">Vehicle Alignment Service</h2>
              <div className="bg-blue-500 h-1 w-1/2 ml-2 md:ml-0" />
              <p className="text-gray-500 py-8 md:py-12">
                Ensure your vehicle's wheels are aligned for improved handling and tire wear. Our expert alignment service guarantees a smoother and safer driving experience.
              </p>
              <button
                onClick={() => handleOpenPopup()}
                className="text-white text-md bg-blue-500 p-3 rounded-lg hover:bg-blue-200 hover:text-blue-900 transition-all hover:font-bold">
                Request Service
              </button>
            </div>
            <div className="pl-4 md:pt-16 lg:pt-12">
              <img src={Alignment} alt="Alignment" className="object-contain w-full pr-32 md:pr-8 lg:pr-32" />
            </div>

            {isPopupOpen && (
              <ServiceRequestPopup
                onClose={handleClosePopup}
                onContact={handleContactClick}
                onBooking={handleBookingClick}
              />
            )}
          </div>

          {/* Brakepad service */}
          <div className="flex flex-col md:flex-row justify-between md:space-x-6 bg-white ">
            <div className="p-4">
              <h2 className="p-2 text-green-500 font-bold text-2xl">Brakepad Service</h2>
              <div className="bg-blue-500 h-1 w-1/2 ml-2 md:ml-0" />
              <p className="text-gray-500 py-8 md:py-12">
                Ensure your vehicle's braking system is in top condition with our brakepad service. We inspect, replace, and maintain brake pads for optimal stopping power.
              </p>
              <button
                onClick={() => handleOpenPopup()}
                className="text-white text-md bg-blue-500 p-3 rounded-lg hover:bg-blue-200 hover:text-blue-900 transition-all hover:font-bold">
                Request Service
              </button>
            </div>
            <div className="pl-4 md:pt-16 lg:pt-12">
              <img src={Brakepad} alt="brakepad service" className="object-contain w-2/3" />
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

export default Maintenance;
