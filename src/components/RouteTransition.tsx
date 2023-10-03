import { useEffect, ReactNode } from 'react'; // Import ReactNode
import { useLocation } from 'react-router-dom'; // Import Outlet
import { AnimatePresence, motion } from 'framer-motion';

type RouteTransitionProps = {
  children: ReactNode; // Use ReactNode for children
};

const RouteTransition = ({ children }: RouteTransitionProps) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence exitBeforeEnter={false} mode='wait'>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default RouteTransition;
