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
            {/* Page Title and Top Button */}
            <div className="flex justify-between items-center">
              <h1 className="text-4xl font-display font-bold text-warmGray-900">
                Surveys
              </h1>
              <Link
                to="/survey-definitions"
                className="inline-flex items-center px-6 py-3 border-2 border-[#08979f] text-base font-medium rounded-md text-[#08979f] hover:bg-[#08979f] hover:text-white transition-all duration-200"
              >
                Survey Definitions
              </Link>
            </div>

            {/* Main Content */}
            <div className="prose prose-lg prose-warmGray max-w-none">
              <div className="space-y-8">
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
              </div>

              {/* Survey Types */}
              <div className="mt-12 space-y-12">
                <h2 className="text-3xl font-display font-bold text-warmGray-900 mb-8">
                  Which Survey?
                </h2>

                {/* Level 1 Survey */}
                <div className="bg-warmGray-50 rounded-lg p-8">
                  <h3 className="text-2xl font-display font-semibold text-warmGray-900 mb-4">
                    Level 1 Survey
                  </h3>
                  <p className="text-warmGray-600">
                    Level 1 survey reports are concise and offer the lowest level of detail. We do not provide this service as we have had very little demand.
                  </p>
                </div>

                {/* Level 2 Survey */}
                <div className="bg-warmGray-50 rounded-lg p-8">
                  <h3 className="text-2xl font-display font-semibold text-warmGray-900 mb-4">
                    Level 2 Survey (previously referred to as a HomeBuyers report)
                  </h3>
                  <p className="text-warmGray-600">
                    A level 2 survey is based on a thorough inspection of the property. It is less detailed than a level 3 survey and is commonly suited to properties built since 1900 although it is sometimes suitable for those built as long ago as 1850 and before, using standard materials and techniques and that are considered to be in reasonable condition. This type of survey is suitable for most properties.
                  </p>
                </div>

                {/* Level 3 Survey */}
                <div className="bg-warmGray-50 rounded-lg p-8">
                  <h3 className="text-2xl font-display font-semibold text-warmGray-900 mb-4">
                    Level 3 Survey
                  </h3>
                  <p className="text-warmGray-600">
                    A level 3 survey is generally more suitable for older or larger properties or those perceived to be in poor condition. This report provides the buyer with a more in depth picture of the property. Detailed advice is included on how to remedy defects and ongoing maintenance issues are addressed.
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-12">
                <Link
                  to="/survey-definitions"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#08979f] hover:bg-[#078087] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#08979f] transition-colors duration-200"
                >
                  Want to know more about survey definitions?
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