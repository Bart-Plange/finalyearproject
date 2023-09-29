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

  //success message states
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
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
    if (!formData.fullName || !formData.email || !formData.carRegistration || !formData.messageTitle || !formData.messageBody) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      // Make a POST request to your backend
      const response = await axios.post('http://localhost:3000/api/contact', formData);

      // Handle the response from the server
      if (response.status === 200) {
        // Display success message and clear the form
        setSuccessMessage('Message sent successfully');
        setErrorMessage('');
        setFormData({
          fullName: '',
          email: '',
          carRegistration: '',
          messageTitle: '',
          messageBody: '',
        });
      } else if (response.status === 400) {
        // Handle a bad request (e.g., validation errors)
        setErrorMessage('Bad request: Please check your input.');
        setSuccessMessage('');
      } else if (response.status === 500) {
        // Handle internal server error
        setErrorMessage('An error occurred on the server.');
        setSuccessMessage('');
      } else {
        // Handle other server responses if needed
        setErrorMessage('An unexpected error occurred.');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Display error message for network or unexpected errors
      setErrorMessage('An error occurred while processing the form.');
      setSuccessMessage('');
    }

  }
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
                placeholder='enter your full name'
                className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            {/* email fields */}
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
                placeholder='enter your email address'
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
                placeholder='enter car registration no.'
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
                placeholder='title '
                required
                className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            {/* Message Head */}
            <div className="mb-4">
              <label htmlFor="messageBody" className="block text-white text-xl font-medium">
                Message
              </label>
              <textarea
                id="messageBody"
                name="messageBody"
                value={formData.messageBody}
                onChange={handleInputChange}
                placeholder='enter your message'
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

          {/* dispkay success or error messages */}
          {/* Display success and error messages here */}
          <div>
            {successMessage && <div className="text-green-500">{successMessage}</div>}
            {errorMessage && <div className="text-red-500">{errorMessage}</div>}
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
;

export default Contact;
