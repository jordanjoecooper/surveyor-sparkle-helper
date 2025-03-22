import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SurveyDefinitions = () => {
  return (
    <div className="min-h-screen bg-warmGray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 mt-8">
              <h1 className="text-3xl md:text-4xl font-bold text-warmGray-900">
                DEFINITIONS OF SURVEY LEVELS
              </h1>
              <a 
                href="/survey_level_definitions.docx"
                download
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-warmGray-700 bg-white border border-warmGray-300 rounded-md hover:bg-warmGray-50 transition-colors duration-200"
              >
                <svg 
                  className="w-4 h-4 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                Download Definitions
              </a>
            </div>
            
            {/* Survey Level 1 */}
            <div className="mb-12 bg-white rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-warmGray-900 mb-4">
                Survey Level 1
                <span className="block text-lg text-warmGray-600 font-normal mt-1">
                  Previously referred to as a Home Condition Report
                </span>
              </h2>
              
              <div className="prose prose-warmGray max-w-none">
                <p className="mb-4">
                  This service is designed for clients seeking a professional and objective report on the condition of the property at an economic price. As a result, it is less comprehensive than a survey level 2 or 3.
                </p>
                
                <p className="mb-4">
                  This level of service includes a visual inspection that is less extensive than for the other survey levels. No tests of the building fabric or services are undertaken. The report objectively describes the condition of the building, its services and the grounds. It highlights relevant legal issues and obvious risks to the building, people and grounds. The report is succinct and provides an assessment of the relative importance of the defects and problems. Where the surveyor is unable to reach a conclusion with reasonable confidence, a recommendation for further investigation should be made.
                </p>
                
                <p>
                  A level 1 report does not include advice on repairs or ongoing maintenance and this, combined with the less extensive inspection, usually means it is better suited to conventionally built, modern dwellings in satisfactory condition. It will not suit older or complex properties, or those in neglected condition.
                </p>
              </div>
            </div>
            
            {/* Survey Level 2 */}
            <div className="mb-12 bg-white rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-warmGray-900 mb-4">
                Survey Level 2
                <span className="block text-lg text-warmGray-600 font-normal mt-1">
                  Previously referred to as a HomeBuyers Report
                </span>
              </h2>
              
              <div className="prose prose-warmGray max-w-none">
                <p className="mb-4">
                  This level of service is for clients who are seeking a professional opinion at an economic price. It is, therefore, less comprehensive than a level 3 service. The focus is on assessing the general condition of the main elements of the property.
                </p>
                
                <p className="mb-4">
                  This intermediate level of service includes a more extensive visual inspection of the building, its services and grounds, but still without tests. Concealed areas normally opened or used by the occupiers are inspected if it is safe to do so (typical examples include roof spaces, basements and cellars). The report objectively describes the condition of the different elements and provides an assessment of the relative importance of the defects/problems. At this level, although it is concise, the report does include advice about repairs and any ongoing maintenance issues. Where the surveyor is unable to reach a conclusion with reasonable confidence, a recommendation for further investigation should be made.
                </p>
                
                <p className="mb-4">
                  This level of service suits a broader range of conventionally built properties, although the age and type will depend on the knowledge and experience of the RICS member. This level of service is unlikely to suit:
                </p>
                
                <ul className="list-disc pl-6 mb-4">
                  <li>complex buildings, for example those that have been extensively extended and altered</li>
                  <li>unique or older historic properties – although survey level 2 services may be appropriate for some older buildings, the decision will depend on the RICS member's proven competence and knowledge and the nature of the building itself. For example, a survey level 2 report on homes with traditional timber frames or those built much before 1850 is likely to be inconclusive and be of little use to the client</li>
                  <li>properties in neglected condition.</li>
                </ul>
              </div>
            </div>
            
            {/* Survey Level 3 */}
            <div className="mb-12 bg-white rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-warmGray-900 mb-4">
                Survey Level 3
                <span className="block text-lg text-warmGray-600 font-normal mt-1">
                  Previously referred to as a Building Survey or Structural Survey
                </span>
              </h2>
              
              <div className="prose prose-warmGray max-w-none">
                <p className="mb-4">
                  This level of service is for clients who are seeking a professional opinion based on a detailed assessment of the property.
                </p>
                
                <p>
                  The service consists of a detailed visual inspection of the building, its services and the grounds and is more extensive than a survey level 2. Concealed areas normally opened or used by the occupiers are inspected if it is safe to do so.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SurveyDefinitions;
