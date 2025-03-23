import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Surveys = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-8">
            {/* Page Title */}
            <h1 className="text-4xl font-display font-bold text-warmGray-900">
              Surveys
            </h1>

            {/* Main Content */}
            <div className="prose prose-lg prose-warmGray max-w-none">
              <p className="text-lg leading-relaxed">
                Buying a new home is likely to be the most important financial decision of your life. 
                By obtaining your own survey you can ensure that you have a full understanding of what 
                you are buying and that no hidden surprises await you once the keys have been handed over.
              </p>

              <p className="text-lg leading-relaxed">
                It is good to remember that mortgage valuation reports are prepared solely for the benefit 
                of the mortgage lender and their only purpose is to ensure that the property has adequate 
                value to cover the amount of the home loan. The inspection for mortgage purposes is very 
                limited, for example, there is no requirement for the surveyor to look in the loft.
              </p>

              <p className="text-lg leading-relaxed">
                The RICS have recently rebranded the different types of home surveys that RICS members 
                are able to offer. A survey level 1 is similar to what was previously known as a Home 
                Condition report, a survey level 2 a HomeBuyers report and a survey level 3 a Building 
                or Structural Survey.
              </p>

              {/* Call to Action */}
              <div className="mt-8">
                <Link
                  to="/survey-definitions"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#08979f] hover:bg-[#078087] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#08979f] transition-colors duration-200"
                >
                  Read Survey Definitions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Surveys; 