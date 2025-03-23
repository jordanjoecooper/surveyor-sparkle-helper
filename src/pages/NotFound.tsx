import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-warmGray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center px-4 pt-32 pb-16">
        <div className="text-center max-w-2xl mx-auto">
          <img 
            src="/gb-logo-color.svg" 
            alt="GB Surveying Logo" 
            className="h-24 mx-auto mb-8"
          />
          
          <h1 className="text-6xl font-display font-bold text-warmGray-900 mb-4">
            404
          </h1>
          
          <h2 className="text-2xl font-display font-semibold text-warmGray-800 mb-4">
            Page Not Found
          </h2>
          
          <p className="text-warmGray-600 mb-8">
            We apologize, but the page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
          
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#08979f] hover:bg-[#078087] transition-colors duration-200"
          >
            Return to Homepage
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
