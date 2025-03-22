import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-warmGray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-warmGray-900">
              Privacy Policy
            </h1>
            
            <a 
              href="/privacy_policy_2021_bg.docx"
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
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
              Download Privacy Policy
            </a>
          </div>
          
          <div className="prose prose-warmGray max-w-none space-y-6">
            <p className="text-warmGray-600">
              This Privacy Policy is tailored to comply with the UK General Data Protection Regulation ((EU) 2016/679) (GDPR) and the EU/UK Withdrawal Agreement including the EU-UK Trade and Cooperation Agreement internal bridging mechanism for personal data and replaces our previous Privacy Policy.
            </p>

            <p className="text-warmGray-600">
              GB Surveying is committed to privacy for everyone who accesses the website. Under the Data Protection Act 2018, we must comply with certain requirements which are designed to ensure that any Data you provided to us is processed with due care and attention.
            </p>

            <p className="text-warmGray-600">
              This policy sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us. Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it. By visiting our website you are accepting and consenting to the practices described in this policy.
            </p>

            <p className="text-warmGray-600">
              For the purpose of the Data Protection Act 2018 (the Act) and the UK GDPR, the data controller is GB Surveying Chartered Surveyors, 1 Finn Farm Road, Ashford, Kent, TN25 7AB
            </p>

            <p className="text-warmGray-600">
              Our nominated representative for the purpose of the Act is Mr Glenn Blakeston who can be contacted on glenn@gbsurveying.com and we are registered on the Data Protection Register – Registration Number: ZA484149
            </p>

            <section>
              <h2 className="text-2xl font-bold text-warmGray-900 mb-4">1. Introduction</h2>
              <div className="space-y-4">
                <p>1.1 We are committed to safeguarding the privacy of our website visitors and service users.</p>
                <p>1.2 This policy applies where we are acting as a data controller with respect to the personal data of our website visitors and service users; in other words, where we determine the purposes and means of the processing of that personal data.</p>
                <p>1.3 We will ask you to consent to our use of cookies in accordance with the terms of this policy when you first visit our website. You consent to our use of cookies in accordance with the terms of this policy.</p>
                <p>1.4 In this policy, "we", "us" and "our" refer to GB Surveying, Chartered Surveyors.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-warmGray-900 mb-4">14. Data Compliance Manager</h2>
              <p>14.1 Our Data Compliance Manager's contact details are: glenn@gbsurveying.com</p>
            </section>

            <p className="text-sm text-warmGray-500 italic mt-8">
              This policy was last updated on 8th February 2021
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
