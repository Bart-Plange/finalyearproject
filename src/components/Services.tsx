import { Link } from 'react-router-dom';
import mechanic from '../assets/cars/mechanic.svg';
import repair from '../assets/cars/repair.svg';
import set from '../assets/cars/set.svg';
import towing from '../assets/cars/towing.svg';
import { useState } from 'react';

const ServiceCard = ({ title, to, imageSrc, description }: { title: string, to: string, imageSrc: string, description: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex flex-col h-72 w-60 mb-8 rounded-xl shadow-sm shadow-blue-500 cursor-pointer justify-center items-center transition-transform transform ${
        isHovered ? 'scale-105' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-4">
        <div className="text-orange-500 font-bold text-2xl">
          <Link to={to}>{title}</Link>
        </div>
        <hr className="divider" />
        <div>
          <img src={imageSrc} alt={title} className="w-24" />
        </div>
        <div className="pt-4 text-gray-200">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 */}
          <ServiceCard
            title="Sale of Spare Parts"
            to="/product"
            imageSrc={set}
            description="All kinds of parts are available for sale and replacements"
          />

          {/* Card 2 */}
          <ServiceCard
            title="Maintenance Service"
            to="/maintenance"
            imageSrc={mechanic}
            description="If you are registered with us, then you are at peace. Find out how"
          />

          {/* Card 3 */}
          <ServiceCard
            title="Repair Services"
            to="/repair"
            imageSrc={repair}
            description="Needs vehicle repair for any damaged part? You found us. Visit any of our centers."
          />

          {/* Card 4 */}
          <ServiceCard
            title="Towing Services"
            to="/towing-map"
            imageSrc={towing}
            description="You can visit our maps section to check for available towing service in your location."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
