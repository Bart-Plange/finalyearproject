import { useState } from 'react';
import axios from 'axios';
import LockImg from '../assets/Lock.svg';
import EnvelopImg from '../assets/Envelope.svg';
import Arrowup from '../assets/arrowrightup.svg';
import Thumbs from '../assets/thumbs.jpeg';
import backarrow from '../assets/backbutton.svg';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        email,
        password,
      });

      // Assuming the backend sends back a token on successful login
      const token = response.data.token;

      // Store the token in local storage
      localStorage.setItem('token', token);

      // Redirect to a protected page or perform other actions
      navigate('/protectedpage');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error('Login failed with status code:', error.response.status);
          console.error('Server response data:', error.response.data);
          setErrorMessage('Invalid credentials. Please try again.');
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
    <div className='md:h-screen md:pt-24 pt-1'>
      <div className="container mx-auto py-6">
        <div className='text-green-500 flex flex-row gap-4'>
          <img src={backarrow} className='w-8 ' />
          <Link to={'/'}>Return Home</Link>
        </div>
        <div className='flex md:flex-row flex-col-reverse justify-between'>
          <div className='SignIn'>
            <div className='pb-4 relative'>
              <p className='text-3xl text-orange-500 font-bold'>Let's Get You Back</p>
            </div>
            <div className='flex flex-col'>
              {/* email */}
              <div className='flex flex-col'>
                <div className='pb-1'>
                  <label htmlFor="Email" className='text-white font-bold text-xl'>Email</label>
                </div>
                <div className='flex bg-white w-full pr-2'>
                  <img src={EnvelopImg} alt="envelop" />
                  <input
                    type="email"
                    name="Email"
                    placeholder='enter email address'
                    id=""
                    className='p-1 my-1 focus:outline-none focus:border-blue-500 w-full'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              {/* Password */}
              <div className='flex flex-col py-5'>
                <div className='pb-1'>
                  <label htmlFor="Password" className='text-white font-bold text-xl'>Password</label>
                </div>
                <div className='flex bg-white pr-2'>
                  <img src={LockImg} alt="lock" />
                  <input
                    type="password"
                    name="Password"
                    id=""
                    className=' p-1 my-1 focus:outline-none focus:border-blue-500 w-full'
                    placeholder='enter password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              
              <button type='submit' className='p-2 bg-orange-500 w-32 rounded-md flex space-x-8' onClick={handleLogin}>
                <span className='text-white'>connect</span>
                <img src={Arrowup} alt="arrow" className='w-6' />
              </button>
              {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
            </div>
          </div>
          <div>
            <img src={Thumbs} alt="Thumbs" />
          </div>
        </div>
      </div>
      <div className='lg:pl-36 ml-6 p-2'>
        <p className='text-xl font-bold text-white'>Not Registered?</p>
        <Link to={'/Signup'} className='w-1/3 text-green-600 text-xl font-bold mt-3 flex hover:underline'>
          Register Here<img src={Arrowup} alt="Arrowup" className='w-8' />
        </Link>
      </div>
    </div>
  );
};

export default Login;
