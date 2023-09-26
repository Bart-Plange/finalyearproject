import { Link } from "react-router-dom";
import Car from '../assets/cars.png'
const OpeningPage = () => {
    return(
        <div className="h-screen relative mx-auto text-white ">
            <div>
                <p className="text-gray-500 text-sm p-4 absolute">YOUR GARAGE</p>
            </div>
            <div className="grid md:grid-cols-2 items-center align-center pt-18 md:pt-24">
                <div className="">
                    <img src={Car} alt="" className="w-full" />
                </div>
                <div className="flex flex-col align-start items-center p-4">

                    <div className="py-4">
                        <p className="text-6xl font-bold">Welcome</p>
                        <p className="py-4 md:text-3xl text-2xl">Let's Get You Started: Right Away</p>
                    </div>

                    <div className="pt-2">
                        <ul className="flex flex-row gap-16 text-xl">
                            <li className="hover:underline"><Link to={"/login"}>Login</Link></li>
                            <span></span>
                            <li className="text-green-800 font-bold hover:underline"><Link to={"/Signup"}>Register Now</Link></li>
                        </ul>
                    </div>
                </div>     
            </div>
    </div>
)
};

export default OpeningPage;
