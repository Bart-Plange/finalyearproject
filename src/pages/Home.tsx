import { useState, useEffect } from 'react';

import { About, HomePage, Cta, CarsServices, Navigation, Services, Loading } from '../components';
import Footer from '../components/Footer';

const Home = () => {
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
          <Navigation />
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

export default Home;
