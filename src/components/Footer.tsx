import { Link } from "react-router-dom";

const Footer = () => {
    return <div>
        <div className=" text-white px-auto mx-auto md:pl-14 pl-6 pr-14 pb-4">
            <div className="flex flex-col md:flex-row align-center justify-evenly space-y-4 md:space-y-0">
                <div>
                    <ul className='flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-6'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/towing-map">Towing Map</Link></li>
                    <li><Link to="/product">Products</Link></li>
          
                    {/* more links */}
                    </ul>
                </div>
                <div className="flex space-x-2">
                    <p>built by: </p>
                    <p>Group 1</p>
                </div>
                <div>
                    <p>Copyright@2023</p>
                </div>
            </div>
      </div>
  </div>;
};

export default Footer;
