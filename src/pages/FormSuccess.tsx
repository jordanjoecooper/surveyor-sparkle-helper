import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const FormSuccess = () => {
  return (
    <div className="min-h-screen bg-warmGray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <svg 
              className="w-16 h-16 text-green-500 mx-auto mb-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
            <h1 className="text-2xl font-bold text-warmGray-900 mb-4">
              Thank You!
            </h1>
            <p className="text-warmGray-600 mb-6">
              Your message has been successfully sent. We'll get back to you as soon as possible.
            </p>
            <Link 
              to="/"
              className="inline-flex items-center text-warmGray-600 hover:text-warmGray-900 transition-colors duration-200"
            >
              ← Return to Homepage
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FormSuccess; 