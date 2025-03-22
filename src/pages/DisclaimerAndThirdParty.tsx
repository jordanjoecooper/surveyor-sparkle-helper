import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const DisclaimerAndThirdParty = () => {
  return (
    <div className="min-h-screen bg-warmGray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-warmGray-900 mb-8">
            Disclaimer, Third Party Sites and Cookies
          </h1>
          
          <div className="prose prose-warmGray max-w-none space-y-8">
            {/* Disclaimer Section */}
            <div>
              <h2 className="text-2xl font-bold text-warmGray-900 mb-4">Disclaimer</h2>
              <p className="text-warmGray-600">
                The material contained in this website is of the nature of general comment only, and neither purports, nor is it intended to be advice on any particular matter.
                No person should act on the basis of any information contained herein without considering, and if necessary, taking appropriate professional advice in relation to their own particular circumstances.
              </p>
            </div>

            {/* Third Party Sites Section */}
            <div>
              <h2 className="text-2xl font-bold text-warmGray-900 mb-4">Third Party Sites</h2>
              <p className="text-warmGray-600">
                This website may contain links to websites operated by third parties. Such links are provided for your convenience only and we have no control over their individual content. We therefore make no warranties or representations as to the accuracy or completeness of any of the information appearing in relation to any linked websites nor as to the suitability or quality of any of their products or services. The provision of links to third party sites does not imply any endorsement of the sites or those that control them.
              </p>
            </div>

            {/* Link to Terms */}
            <div className="pt-4">
              <Link 
                to="/privacy-policy" 
                className="text-warmGray-600 hover:text-warmGray-900 underline transition-colors duration-200"
              >
                View our Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DisclaimerAndThirdParty; 