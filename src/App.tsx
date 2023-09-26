import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Booking, Home, LoginPage, Maintenance, ProductPage, RepairPage, SignupPage, TowingCenterPage, TowingMapPage } from './pages';
import Contact from './components/Contact';


const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/Towing-centers' element={<TowingCenterPage />} />
          <Route path='/Towing-Map' element={<TowingMapPage />} />
          <Route path='/Login' element={<LoginPage />} />
          <Route path='/Signup' element={<SignupPage />} />
          <Route path='/maintenance' element={<Maintenance />} />
          <Route path='/repair' element={<RepairPage />} />
          <Route path='/Booking' element={<Booking />} />
          <Route path='/Contact' element={<Contact />} />
         
        </Routes>
      </BrowserRouter>
  );
}

export default App;
