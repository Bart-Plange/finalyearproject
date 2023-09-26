import { Navigation } from ".";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div className="container">
        <div>
        <p className="text-orange-500 text-2xl font-bold">
          Welcome to Our Contact Page
          </p>
        </div>
        </div>
      <div>
        <Footer />
      </div>
    </div>
  )
};

export default Contact;
