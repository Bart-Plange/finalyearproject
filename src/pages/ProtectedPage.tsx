import { useState, useEffect } from 'react';

import { About, HomePage, Cta, CarsServices, Services, Loading } from '../components';
import Footer from '../components/Footer';
import NavigationLoggedProfile from '../components/NavigationLoggedProfile';

const ProtectedPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading for 2 seconds
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="text-white pb-8">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <NavigationLoggedProfile />
          <HomePage />
          <CarsServices />
          <Cta />
          <About />
          <Services />
          <Footer />
        </>
      )}
    </div>
  );
};

export default ProtectedPage;
