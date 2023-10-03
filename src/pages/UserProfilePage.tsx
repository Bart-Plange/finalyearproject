import { NavigationLoggedProfile, UserProfile } from "../components";
import Footer from "../components/Footer";

const UserProfilePage = () => {
    return <div>
        <div >
            <div className=" mx-auto">
                <div>
                    <NavigationLoggedProfile />
                </div>
                <div>
                    <UserProfile />
                </div>
                <div className="pt-4">
                    <Footer />
                </div>
            </div>
        </div>
        
    </div>;
};

export default UserProfilePage;
