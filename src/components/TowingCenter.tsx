
interface TowingCenterProps {
  name: string;
  location: string;
  contact: string;
}

const TowingCenter: React.FC<TowingCenterProps> = ({ name, location, contact }) => (
  <div className="">
    <div className="container mx-auto Towing ralative">
      <div className="flex flex-row flex-wrap lg:space-x-6 justify-between text-white">

        <div className="pb-6">
          <h2 className="text-green-500">{name}</h2>
          <p>Location: {location}</p>
          <p>Contact: {contact}</p>
        </div>
      </div>
    </div>
  </div>
);

export default TowingCenter;
