import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Chat, RouteTransition, UserProfile } from './components';
import {
  Booking,
  Home,
  LoginPage,
  Maintenance,
  ProductPage,
  ProtectedPage,
  RepairPage,
  SignupPage,
  TowingCenterPage,
  TowingMapPage,
  UserProfilePage,
} from './pages';
import Contact from './components/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Chat />
      <RouteTransition>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/Towing-centers" element={<TowingCenterPage />} />
        <Route path="/Towing-Map" element={<TowingMapPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/repair" element={<RepairPage />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/ProtectedPage" element={<ProtectedPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
      </Routes>
      </RouteTransition>
    </BrowserRouter>
  );
};

export default App;
