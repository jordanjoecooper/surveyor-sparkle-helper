import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Building Surveying",
      description: "Comprehensive building surveys and detailed property inspections for residential properties.",
      icon: "🏗️"
    },
    {
      title: "General Property Advice",
      description: "Expert guidance on property matters, maintenance, and improvements to help you make informed decisions.",
      icon: "📋"
    },
    {
      title: "Improvement Advice",
      description: "Professional recommendations for property improvements and renovations to enhance value and functionality.",
      icon: "🔨"
    },
    {
      title: "Defects Analysis",
      description: "Thorough investigation and analysis of building defects with detailed reports and remediation recommendations.",
      icon: "🔍"
    }
  ];

  return (
    <div className="min-h-screen bg-warmGray-50">
      <Navbar />
      <main className="flex-grow">

        <div className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold text-warmGray-900 mb-4 mt-8">
                Our Services
              </h1>
              <p className="text-lg text-warmGray-600 max-w-2xl mx-auto">
                Professional surveying services tailored to your needs, delivered with expertise and attention to detail.
              </p>
            </div>
            {/* Image Grid */}
            {/* Disable this for now until we find better images */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
              <div className="aspect-w-16 aspect-h-9 bg-warmGray-200 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/building2.jpg"
                  alt="Property Services"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-w-16 aspect-h-9 bg-warmGray-200 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/building3.jpg"
                  alt="Property Services"
                  className="w-full h-full object-cover"
                />
              </div>
            </div> */}

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-200 text-center"
                >
                  <div className="text-4xl mb-4 flex justify-center">{service.icon}</div>
                  <h2 className="text-2xl font-bold text-warmGray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-warmGray-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
            {/* Payments Info */}
            <div className="bg-warmGray-100 rounded-lg p-8 mt-8">
              <p className="text-warmGray-600">
                Please note, we may make a referral payment, either individually or as part of a third-party commercial relationship.
              </p>
            </div>
            {/* Add this section where appropriate in your services content */}
            <div className="mt-8 p-6 bg-cyan-50 rounded-lg">
              <h3 className="text-xl font-semibold text-cyan-900 mb-3">
                Looking for Survey Information?
              </h3>
              <p className="text-cyan-800 mb-4">
                Learn more about our comprehensive survey services and the different types of surveys available.
              </p>
              <Link
                to="/surveys"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#08979f] hover:bg-[#078087] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#08979f] transition-colors duration-200"
              >
                View Our Surveys
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services; 