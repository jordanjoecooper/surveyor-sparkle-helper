import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-warmGray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-warmGray-900">
                About Us
              </h1>
              <div className="prose prose-warmGray max-w-none">
                <p className="text-lg text-warmGray-600">
                  Glenn Blakeston Surveying is an independent Chartered Building Surveying company based near Ashford in Kent. The main Partner, Glenn Blakeston, has over 30 years experience surveying houses in Kent.
                </p>
                <p className="text-lg text-warmGray-600">
                  Since 2000 he has project managed the construction of 5 homes for his own occupation and renovated a fifth property. This has provided a greater understanding of building techniques and the issues associated in dealing with tradesmen, utility companies, Planners and all others involved in the building process.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col items-center">
              <img
                src="/101.jpg"
                alt="Glenn Blakeston"
                className="w-1/2 rounded-lg shadow-xl"
              />
              <span className="mt-4 text-warmGray-600 text-center italic">
                Glenn Blakeston
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-warmGray-900 mb-6">
              Our Commitment
            </h2>
            <p className="text-lg text-warmGray-600">
              We aim to ensure that all our Clients receive quality surveys and outstanding customer service at reasonable cost. A 'one to one' personal service is provided and we will discuss your individual requirements with you before we undertake your survey and will chat with you to discuss our findings afterwards. Our reports are written in plain English and we endeavour to avoid the use of jargon.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About; 