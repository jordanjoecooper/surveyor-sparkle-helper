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
            <div className="space-y-4">
              <p>This Privacy Policy is tailored to comply with the UK General Data Protection Regulation ((EU) 2016/679) (GDPR) and the EU/UK Withdrawal Agreement including the EU-UK Trade and Cooperation Agreement internal bridging mechanism for personal data and replaces our previous Privacy Policy.</p>
              
              <p>GB Surveying is committed to privacy for everyone who accesses the website. Under the Data Protection Act 2018, we must comply with certain requirements which are designed to ensure that any Data you provided to us is processed with due care and attention.</p>
              
              <p>This policy sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us. Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it. By visiting our website you are accepting and consenting to the practices described in this policy.</p>
              
              <p>For the purpose of the Data Protection Act 2018 (the Act) and the UK GDPR, the data controller is GB Surveying Chartered Surveyors, 1 Finn Farm Road, Ashford, Kent, TN25 7AB</p>
              
              <p>Our nominated representative for the purpose of the Act is Mr Glenn Blakeston who can be contacted on glenn@gbsurveying.com and we are registered on the Data Protection Register – Registration Number: ZA484149</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const getSectionTitle = (section: number): string => {
  const titles: { [key: number]: string } = {
    1: "Introduction",
    2: "How we use your personal data",
    3: "Providing your personal data to others",
    4: "International transfers of your personal data",
    5: "Retaining and deleting personal data",
    6: "Amendments",
    7: "Your rights",
    8: "Your rights",
    9: "About cookies",
    10: "Cookies that we use",
    11: "Cookies used by our service providers",
    12: "Managing cookies",
    13: "Our details",
    14: "Data Compliance Manager"
  };
  return titles[section] || "";
};

const getSectionContent = (section: number): JSX.Element => {
  const content: { [key: number]: JSX.Element } = {
    1: (
      <>
        <p>1.1 We are committed to safeguarding the privacy of our website visitors and service users.</p>
        <p>1.2 This policy applies where we are acting as a data controller with respect to the personal data of our website visitors and service users; in other words, where we determine the purposes and means of the processing of that personal data.</p>
        <p>1.3 We will ask you to consent to our use of cookies in accordance with the terms of this policy when you first visit our website. You consent to our use of cookies in accordance with the terms of this policy.</p>
        <p>1.4 In this policy, "we", "us" and "our" refer to GB Surveying, Chartered Surveyors.</p>
      </>
    ),
    2: (
      <>
        <p>2.1 In this Section 2 we have set out:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>the general categories of personal data that we may process;</li>
          <li>in the case of personal data that we did not obtain directly from you, the source and specific categories of that data;</li>
          <li>the purposes for which we may process personal data; and</li>
          <li>the legal bases of the processing.</li>
        </ul>
        <p>2.2 We may process data about your use of our website and services ("usage data"). The usage data may include your IP address, geographical location, browser type and version, operating system, referral source, length of visit, page views and website navigation paths, as well as information about the timing, frequency and pattern of your service use. The source of the usage data is our analytics tracking system. This usage data may be processed for the purposes of analysing the use of the website and services. The legal basis for this processing is our legitimate interests, namely monitoring and improving our website and services.</p>
        {/* Continue with 2.3 through 2.14 */}
      </>
    ),
    3: (
      <>
        <p>3.1 We may disclose your personal data to our insurers, accountants and/or professional advisers insofar as reasonably necessary for the purposes of obtaining or maintaining insurance coverage, managing risks, obtaining professional advice, or the establishment, exercise or defence of legal claims, whether in court proceedings or in an administrative or out-of-court procedure.</p>
        <p>3.2 In addition to the specific disclosures of personal data set out in this Section 3, we may disclose your personal data where such disclosure is necessary for compliance with a legal obligation to which we are subject, or in order to protect your vital interests or the vital interests of another natural person. We may also disclose your personal data where such disclosure is necessary for the establishment, exercise or defence of legal claims, whether in court proceedings or in an administrative or out-of-court procedure.</p>
        <p>3.3 In the unlikely event that a liquidator, administrator or receiver is appointed over us or on any part of our assets, that insolvency practitioner may transfer your information to a third party purchaser of the business provided that the purchaser undertakes to use your information for the same purposes as set out in this policy.</p>
        <p>3.4 If GB Surveying, Chartered Surveyors were merged with or taken over by another organisation, your personal data would become available to such organisation provided that such organization provided an undertaking only to use it for the same purposes as are set out in this policy.</p>
      </>
    ),
    4: (
      <>
        <p>4.1 In this Section 4, we provide information about the circumstances in which your personal data may be transferred to countries outside the European Economic Area (EEA). We do not anticipate that your personal data will be transferred to countries outside of the European Economic Area (EEA)</p>
        <p>4.2 You acknowledge that personal data that you submit for publication through our website or services may be available, via the internet, around the world. We cannot prevent the use (or misuse) of such personal data by others.</p>
      </>
    ),
    // ... I'll continue with the remaining sections in the next part
  };
  return content[section] || <></>;
};

export default PrivacyPolicy;
