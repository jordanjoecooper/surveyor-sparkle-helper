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

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const menuItems = ['Home', 'Services', 'Survey Definitions', 'About', 'Contact'];

  // Helper function to check if menu item is current page
  const isCurrentPage = (item: string) => {
    const itemPath = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
    return location.pathname === itemPath;
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 
          isMobileMenuOpen ? 'bg-transparent' : 
          isHomePage ? 'bg-transparent' : 'bg-white shadow-sm'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <Link 
                to="/" 
                className="flex items-center gap-3"
                aria-label="GB Surveying - Return to homepage"
              >
                <img 
                  src="/gb-logo-color.svg"
                  alt="GB Surveying Logo" 
                  className="h-12 w-auto"
                  width="48"
                  height="48"
                />
                <span 
                  className={`font-display text-xl font-bold transition-colors duration-200 ${
                    isHomePage && !isScrolled ? 'text-white' : 'text-warmGray-800'
                  }`}
                >
                  GB Surveying
                </span>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8" role="menubar">
              {menuItems.map((item) => {
                const isActive = isCurrentPage(item);
                return (
                  <Link
                    key={item}
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className={`transition-colors duration-200 font-medium ${
                      isHomePage && !isScrolled ? 'text-white hover:text-white/80' : 'text-warmGray-600 hover:text-warmGray-900'
                    }`}
                    role="menuitem"
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-md transition-all duration-200 z-[70] ${
                isMobileMenuOpen 
                  ? 'text-warmGray-800 hover:text-warmGray-900' 
                  : isHomePage && !isScrolled 
                    ? 'text-white hover:text-white/80' 
                    : 'text-warmGray-600 hover:text-warmGray-900'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500`}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close main menu" : "Open main menu"}
            >
              <span className="sr-only">{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden z-[60] ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`fixed inset-y-0 right-0 w-[min(75vw,320px)] bg-white shadow-2xl transition-transform duration-300 ease-in-out transform md:hidden z-[70] ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="h-20 px-6 flex items-center justify-between border-b border-warmGray-100">
          <Link 
            to="/" 
            className="flex items-center gap-3" 
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="GB Surveying - Return to homepage"
          >
            <img 
              src="/gb-logo-color.svg"
              alt="GB Surveying Logo" 
              className="h-10 w-auto"
              width="40"
              height="40"
            />
            <span className="font-display text-lg font-bold text-warmGray-800">
              GB Surveying
            </span>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-md text-warmGray-600 hover:text-warmGray-900 transition-colors duration-200"
            aria-label="Close navigation menu"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <nav 
          className="h-[calc(100%-5rem)] overflow-y-auto" 
          aria-label="Mobile navigation"
        >
          <div 
            className="px-1 pt-2 pb-3 space-y-1"
            role="menu"
            aria-orientation="vertical"
          >
            {menuItems.map((item) => {
              const isActive = isCurrentPage(item);
              return (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                  className={`block px-6 py-4 text-base font-medium rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'text-cyan-700 bg-cyan-50/80' 
                      : 'text-warmGray-600 hover:text-warmGray-900 hover:bg-warmGray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  role="menuitem"
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
