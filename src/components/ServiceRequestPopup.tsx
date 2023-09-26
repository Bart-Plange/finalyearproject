import React from 'react';

interface ServiceRequestPopupProps {
  onClose: () => void;
  onContact: () => void;
  onBooking: () => void;
}

const ServiceRequestPopup: React.FC<ServiceRequestPopupProps> = ({
  onClose,
  onContact,
  onBooking,
}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Request Service</h2>
        <p className="text-gray-600 mb-4">How would you like to request this service?</p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => {
              onClose();
              onContact();
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Contact Us
          </button>
          <button
            onClick={() => {
              onClose();
              onBooking();
            }}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Book Now
          </button>
        </div>
        <button
          onClick={onClose}
          className="bg-red-500 text-white mt-4 px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ServiceRequestPopup;
