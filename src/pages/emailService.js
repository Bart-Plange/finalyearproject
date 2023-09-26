import axios from 'axios';

// Function to send an email after a successful booking
export async function sendEmailAfterBooking(bookingData) {
  try {
    // Make an HTTP POST request to send the email
    const response = await axios.post('/api/booking', bookingData);

    if (response.status === 200) {
      console.log('Booking confirmation email sent');
    } else {
      console.error('Error sending email:', response.data.error);
    }
  } catch (error) {
    console.error('Network error:', error);
  }
}

// ... (rest of your code)
