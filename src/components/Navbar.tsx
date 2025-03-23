import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Home', 'Services', 'Survey Definitions', 'About', 'Contact'];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 
        isMobileMenuOpen ? 'bg-transparent' : 
        isHomePage ? 'bg-transparent' : 'bg-white shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={isMobileMenuOpen ? "/gb-logo-color.svg" : (isScrolled || !isHomePage ? "/gb-logo-black.svg" : "/gb-logo-color.svg")} 
                alt="GB Surveying" 
                className="h-12 w-auto"
              />
              <span 
                className={`font-display text-xl font-bold transition-colors duration-200 ${
                  isMobileMenuOpen ? 'text-white' : (isScrolled || !isHomePage ? 'text-warmGray-800' : 'text-white')
                }`}
              >
                GB Surveying
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className={`transition-colors duration-200 font-medium ${
                  isMobileMenuOpen ? 'text-white hover:text-white/80' :
                  (isScrolled || !isHomePage ? 'text-warmGray-600 hover:text-warmGray-900' : 'text-white hover:text-white/80')
                }`}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-200 ${
                isMobileMenuOpen ? 'text-white hover:text-white/80' :
                (isScrolled || !isHomePage ? 'text-warmGray-600 hover:text-warmGray-900' : 'text-white hover:text-white/80')
              } focus:outline-none`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-64 opacity-100 bg-black/40 backdrop-blur-sm' 
              : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className="block px-3 py-2 transition-colors duration-200 font-medium text-white hover:text-white/90"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
