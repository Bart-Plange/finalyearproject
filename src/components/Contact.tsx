import React, { useState } from 'react';
import axios from 'axios';
import { Navigation } from '.';
import Footer from './Footer';

const Contact: React.FC = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    carRegistration: '',
    messageTitle: '',
    messageBody: '',
  });

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Perform form validation here
    if (!formData.fullName || !formData.email) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      // Make a POST request to your backend
      const response = await axios.post('http://localhost:3000/api/contacts', formData);

      // Handle the response from the server as needed
      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div className='container mx-auto p-4'>
      <h1 className="text-2xl font-semibold mb-4 text-orange-500">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-white text-xl font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        {/* Repeat the above block for other form fields */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-white text-xl font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        {/* cra registration */}
        <div className="mb-4">
          <label htmlFor="carRegistration" className="block text-white text-xl font-medium">
            Car Registration No.
          </label>
          <input
            type="text"
            id="carReg"
            name="carRegistration"
            value={formData.carRegistration}
            onChange={handleInputChange}
            required
            className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        {/* Message Head */}
        <div className="mb-4">
          <label htmlFor="messageTitle" className="block font-medium text-white text-xl">
           Message Title
          </label>
          <input
            type="text"
            id="messageTitle"
            name="messageTitle"
            value={formData.messageTitle}
            onChange={handleInputChange}
            required
            className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        {/* Message Head */}
        <div className="mb-4">
          <label htmlFor="messageBody" className="block text-white text-xl font-medium">
           Message
          </label>
          <input
            type="text"
            id="messageBody"
            name="messageBody"
            value={formData.messageBody}
            onChange={handleInputChange}
            required
            className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        
        {/* Add other form fields here */}

        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
