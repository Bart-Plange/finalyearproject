// BookingPage.tsx
// Import necessary modules
import axios from 'axios';
import React, { useState } from 'react';
import { Navigation } from '../components';
import Footer from '../components/Footer';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import BookImg from '../assets/booking.jpg'

//import functions

const BookingPage: React.FC = () => {
  // State for form fields
  const [serviceType, setServiceType] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [carRegistration, setCarRegistration] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

   const [bookingStatus, setBookingStatus] = useState<
    'initial' | 'success' | 'error' | 'network-error'
  >('initial');

  // template - Add more information about the benefits of booking appointments
  const renderTemplate = () => (
    <div className='pl-6'>
      <p className='text-gray-300'>
        Fill out the form to make your booking with our experienced team.
      </p>
      <p className='text-gray-300 py-2'>
        Enjoy the following benefits of booking with us:
      </p>
      <ul className='list-disc text-gray-300 pl-8'>
        <li className='pt-4'>Expert Service: Our team consists of skilled professionals.</li>
        <li className='py-4'>Convenient Appointments: Choose your preferred date and time.</li>
        <li>Quick Responses: Receive confirmation shortly after booking.</li>
        <li className='pt-4'>Safe & Secure: Your information is kept confidential.</li>
        {/* Add more benefits as needed */}
      </ul>
    </div>
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setBookingStatus('initial'); // Reset status

    // Form submission logic
    const bookingData = {
      serviceType,
      timeSlot,
      fullName,
      email,
      telephone,
      carRegistration,
      selectedDate,
    };

    try {
      const response = await axios.post('http://localhost:3000/api/bookings', bookingData);
      console.log('API Response:', response);

      if (response.status === 201) {
        // Clear form fields after successful booking
        setServiceType('');
        setTimeSlot('');
        setFullName('');
        setEmail('');
        setTelephone('');
        setCarRegistration('');
        setSelectedDate(null);
        setBookingStatus('success');

      } else {
        setBookingStatus('error');
      }
    } catch (error) {
      console.error('Network error:', error);
      setBookingStatus('network-error');
    }
  };

  
  const renderMessage = () => {
    switch (bookingStatus) {
      case 'success':
        return (
          <p className="text-green-600">
            Booking saved successfully. You will receive a confirmation shortly.
          </p>
        );
      case 'error':
        return (
          <p className="text-red-600">
            Failed to save booking. Please try again later.
          </p>
        );
      case 'network-error':
        return (
          <p className="text-red-600">
            Network error occurred. Please check your internet connection.
          </p>
        );
      default:
        return null;
    }
  };


  return (
    <div >
          <Navigation />
          <div className="container mx-auto p-4">
              
      <h2 className="text-3xl font-bold mb-4 text-orange-500">Book a Service</h2>
        <div className='grid lg:grid-cols-2 gap-6'>

          <div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Service Type Dropdown */}
          <div>
            <label htmlFor="serviceType" className="block font-medium text-gray-300">
              Service Type
            </label>
            <select
              id="serviceType"
              name="serviceType"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="block w-full px-4 py-2 mt-1 border rounded-lg cursor-pointer focus:outline-none"
              required
            >
              <option value="">Select Service Type</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Repair">Repair</option>
              <option value="Replacement">Parts Replacement</option>
              {/* Add more service types as needed */}
            </select>
          </div>

          {/* Time Slot Radio Buttons */}
          <div>
            <p className="block font-medium text-gray-300">Time Slot</p>
            <div className="space-x-4">
              <label className="inline-flex items-center text-gray-300">
                <input
                  type="radio"
                  name="timeSlot"
                  value="Morning"
                  checked={timeSlot === 'Morning'}
                  onChange={() => setTimeSlot('Morning')}
                  className="mr-2 text-blue-500"
                />
                Morning
              </label>
              <label className="inline-flex items-center text-gray-300">
                <input
                  type="radio"
                  name="timeSlot"
                  value="Afternoon"
                  checked={timeSlot === 'Afternoon'}
                  onChange={() => setTimeSlot('Afternoon')}
                  className="mr-2 text-blue-500"
                />
                Afternoon
              </label>
              <label className="inline-flex items-center text-gray-300">
                <input
                  type="radio"
                  name="timeSlot"
                  value="Evening"
                  checked={timeSlot === 'Evening'}
                  onChange={() => setTimeSlot('Evening')}
                  className="mr-2 text-blue-500"
                />
                Evening
              </label>
            </div>
          </div>

          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block font-medium text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="block w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none"
                required
                placeholder='enter full name'
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none"
                required
                placeholder='enter email'
            />
          </div>

          {/* Telephone */}
          <div>
            <label htmlFor="telephone" className="block font-medium text-gray-300">
              Telephone
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              className="block w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none"
                required
                placeholder='enter telephone'
            />
          </div>

          {/* Car Registration Number */}
          <div>
            <label htmlFor="carRegistration" className="block font-medium text-gray-300">
              Car Registration Number
            </label>
            <input
              type="text"
              id="carRegistration"
              name="carRegistration"
              value={carRegistration}
              onChange={(e) => setCarRegistration(e.target.value)}
              className="block w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none"
                required
                placeholder='enter car registration no.'
            />
          </div>

            <div className="mb-4">
              <label htmlFor="bookingDate" className="block font-medium text-gray-300">
                Select Date
              </label>
              <DatePicker
                id="bookingDate"
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                isClearable
                placeholderText="Select a date"
                className="block w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none border-gray-300 focus:border-blue-500 hover:border-blue-500 bg-white text-gray-700"
                calendarClassName="bg-white border rounded-lg shadow-lg"
                dayClassName={(date) => {
                  return date.getDay() === 0 || date.getDay() === 6 ? 'text-gray-500' : '';
                }}
                monthClassName={(date) => {
                  return date.getMonth() === 0 ? 'text-gray-500' : '';
                }}
              />
            </div>



          {/* Submit Button */}
          <div>
            <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
              Book Now
            </button>
          </div>
            </form>
            {renderMessage()}
          </div>
                    {/* template */}
          <div className='pl-6'>
             
            <p className='text-3xl py-2 text-green-500'>Your information is safe with us.</p> 
            <div>
              {renderTemplate()}
            </div>
            <div className='pl-8 pt-4'>
              <img src={BookImg} alt="book img" />
            </div>
          </div>
      </div>
          </div>
          <Footer />
</div>
  );
};

export default BookingPage;
