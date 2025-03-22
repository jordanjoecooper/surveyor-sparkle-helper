import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-warmGray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-warmGray-900 mb-8">
            Terms and Conditions
          </h1>
          
          <div className="prose prose-warmGray max-w-none">
            <p className="text-warmGray-600">
              Terms and conditions content will be added here.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms; 