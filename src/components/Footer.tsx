import { Link } from 'react-router-dom';

const Footer = () => {
  const menuItems = ['Home', 'Services', 'Survey Definitions', 'About', 'Contact'];

  return (
    <footer className="bg-warmGray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Logo and Company Name */}
            <div className="flex items-center gap-6">
              <span className="text-xl font-display font-bold text-white">
                GB Surveying
              </span>
              <img 
                src="/rics-footer.png" 
                alt="RICS Regulated Logo" 
                className="h-8 w-auto object-contain"
              />
            </div>

            {/* Legal Links */}
            <div className="flex justify-end">
              <div className="flex flex-wrap gap-4 text-sm text-warmGray-400">
                <a 
                  href="/disclaimer-and-third-party" 
                  className="hover:text-white transition-colors duration-200"
                >
                  Disclaimer & Third Party Sites
                </a>
                <a 
                  href="/privacy-policy" 
                  className="hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="border-t border-warmGray-800 pt-8">
            <nav className="flex justify-center">
              <ul className="flex flex-wrap gap-8 text-warmGray-400">
                {menuItems.map((item) => (
                  <li key={item}>
                    <Link
                      to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Copyright */}
          <div className="border-t border-warmGray-800 pt-8">
            <p className="text-sm text-warmGray-400 text-center">
              © {new Date().getFullYear()} GB Surveying. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
