import { useState } from 'react';
import axios from 'axios';
import LockImg from '../assets/Lock.svg';
import EnvelopImg from '../assets/Envelope.svg';
import Arrowup from '../assets/arrowrightup.svg';
import backarrow from '../assets/backbutton.svg';
import { Link, useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [carRegistration, setCarRegistration] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telephone, setTelephone] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSignup = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/register', {
        username,
        carRegistration,
        email,
        password,
        telephone,
      });

      //show successful registration
      console.log('Registration successful:', response.data);
      setRegistrationSuccess(true);

      //check if email already exists
      if (response.data.message === 'User with this email already exists')
         {
      // Display an alert to the user
      alert('This email already exists. Please log in instead.');
    } else {
      // Redirect to sign-in page after a brief delay (e.g., 2 seconds)
      setTimeout(() => {
        navigate('/login');
      }, 2000);
      }

      //clear form fields
      setUsername('');
      setCarRegistration('');
      setEmail('');
      setPassword('');
      setTelephone('');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error('Login failed with status code:', error.response.status);
        } else if (error.request) {
          console.error('No response received from the server');
          setErrorMessage('No response received from the server. Please try again later.');
        } else {
          console.error('Error:', error.message);
          setErrorMessage('An error occurred. Please try again.');
        }
      } else {
        console.error('An unexpected error occurred:', error);
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <div className='h-screen'>
      <div className='container mx-auto py-6'>
        <div className='text-green-500 flex flex-row gap-4'>
          <img src={backarrow} className='w-8 ' />
          <Link to={'/'}>Return Home</Link>
        </div>
        <div className='flex flex-col justify-between lg:space-x-6 lg:flex-row'>
          <div className='lg:w-1/3 my-auto'>
            <div className='SignUp'>
              <div className='pb-4 relative'>
                <p className='text-3xl text-orange-500 font-bold'>
                  WE ARE GLAD YOU ARE JOINING US
                </p>
              </div>
            </div>
          </div>

          <div className='lg:w-2/3'>
            <div className='flex flex-col'>
              <form onSubmit={handleSignup}>
                <div className='flex flex-col'>
                  <div className='pb-1'>
                    <label htmlFor='name' className='text-white font-bold text-xl'>
                      Name
                    </label>
                  </div>

                  <div className='flex bg-white pr-2'>
                    <input
                      type='text'
                      name='username'
                      id=''
                      className='p-1 my-1 focus:outline-none focus:border-blue-500 w-full'
                      placeholder='Enter full name'
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>

                <div className='flex flex-col pt-5'>
                  <div className='pb-1'>
                    <label htmlFor='car-reg' className='text-white font-bold text-xl'>
                      Car registration No.
                    </label>
                  </div>

                  <div className='flex bg-white pr-2'>
                    <input
                      type='text'
                      name='car-reg'
                      id=''
                      className='p-1 my-1 focus:outline-none focus:border-blue-500 w-full'
                      placeholder='Enter car registration no.'
                      required
                      value={carRegistration}
                      onChange={(e) => setCarRegistration(e.target.value)}
                    />
                  </div>
                </div>

                <div className='flex flex-col pt-5'>
                  <div className='pb-1'>
                    <label htmlFor='Email' className='text-white font-bold text-xl'>
                      Email
                    </label>
                  </div>

                  <div className='flex bg-white pr-2'>
                    <img src={EnvelopImg} alt='envelop' />
                    <input
                      type='email'
                      name='Email'
                      id=''
                      className='p-1 my-1 focus:outline-none focus:border-blue-500 w-full'
                      placeholder='Enter email address'
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className='flex flex-col py-5'>
                  <div className='pb-1'>
                    <label htmlFor='Password' className='text-white font-bold text-xl'>
                      Password
                    </label>
                  </div>

                  <div className='flex bg-white pr-2'>
                    <img src={LockImg} alt='lock' />
                    <input
                      type='password'
                      name='Password'
                      id=''
                      className=' p-1 my-1 focus:outline-none focus:border-blue-500 w-full'
                      placeholder='Enter password'
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className='flex flex-col py-5'>
                  <div className='pb-1'>
                    <label htmlFor='Telephone' className='text-white font-bold text-xl'>
                      Telephone
                    </label>
                  </div>

                  <div className='flex bg-white pr-2'>
                    <input
                      type='tel'
                      name='Telephone'
                      id=''
                      className=' p-1 my-1 focus:outline-none focus:border-blue-500 w-full'
                      placeholder='Enter telephone number'
                      required
                      value={telephone}
                      onChange={(e) => setTelephone(e.target.value)}
                    />
                  </div>
                </div>

                <button type='submit' className='p-2 bg-orange-500 w-32 rounded-md flex space-x-8'>
                  <span className='text-white'>connect</span>
                  <img src={Arrowup} alt="arrow" className='w-6' />
                </button>
              </form>

              {errorMessage && (
                <p className='text-red-500 font-bold text-center mt-3'>
                  {errorMessage}
                </p>
              )}

              {registrationSuccess && (
                <p className='text-green-500 font-bold text-center mt-3'>
                  Registration successful! Redirecting to sign-in page...
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='lg:pl-36 lg:ml-36 ml-4 p-2 flex gap-6'>
        <p className='text-xl font-bold text-white'>Already a Registered Member?</p>
        <Link to={'/login'} className='text-green-800 font-bold text-xl hover:underline flex'>
          Sign in here <img src={Arrowup} alt='Arrowup' className='w-8' />
        </Link>
      </div>
    </div>
  );
};

export default SignupPage;
