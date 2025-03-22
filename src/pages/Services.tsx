import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen bg-warmGray-50">
      <Navbar />
      
      <main className="flex-grow">
        <div className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-warmGray-900 mb-8 mt-8">
              Other Services
            </h1>

            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="aspect-w-16 aspect-h-9 bg-warmGray-200 rounded-lg overflow-hidden">
                <img
                  src="/services-1.jpg"
                  alt="Property Services"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-w-16 aspect-h-9 bg-warmGray-200 rounded-lg overflow-hidden">
                <img
                  src="/services-2.jpg"
                  alt="Property Services"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Services List */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-12">
              <h2 className="text-2xl font-bold text-warmGray-900 mb-6">
                Other Services include:
              </h2>
              <ul className="space-y-4 text-warmGray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-warmGray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  General property advice
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-warmGray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Improvement advice
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-warmGray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Defects analysis
                </li>
              </ul>
            </div>

            {/* Payments Info */}
            <div className="bg-warmGray-100 rounded-lg p-8">
              <p className="text-warmGray-600">
                We may make a referral payment, either individually or as part of a third-party commercial relationship.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services; 