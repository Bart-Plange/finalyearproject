
import React from 'react';
import TowingCenter from '../components/TowingCenter';
import { towingCenters } from '../data/TowingCenterData'; // Import your data

const TowingCenterPage: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {towingCenters.map(towingCenter => (
          <TowingCenter
            key={towingCenter.id}
            name={towingCenter.name}
            location={towingCenter.location}
            contact={towingCenter.contact}
          />
        ))}
      </div>
    </div>
  );
};

export default TowingCenterPage;
