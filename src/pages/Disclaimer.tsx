
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-warmGray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-warmGray-900 mb-8">
            Disclaimer
          </h1>
          
          <div className="prose prose-warmGray max-w-none">
            <p className="text-warmGray-600 leading-relaxed mb-6">
              The material contained in this website is of the nature of general comment only, and neither purports, nor is it intended to be advice on any particular matter.
            </p>
            
            <p className="text-warmGray-600 leading-relaxed">
              No person should act on the basis of any information contained herein without considering, and if necessary, taking appropriate professional advice in relation to their own particular circumstances.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Disclaimer;
