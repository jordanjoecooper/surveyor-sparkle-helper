import { Link } from 'react-router-dom';

const Footer = () => {
  const menuItems = ['Home', 'Surveys', 'About', 'Contact', 'Services'];

  return (
    <footer className="bg-[#08979f] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 gap-8">
            {/* Logo and Company Name */}
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <Link to="/">
                    <img 
                      src="/gb-logo-black.svg" 
                      alt="GB Surveying" 
                      className="h-12 w-auto"
                    />
                  </Link>
                  <span className="text-xl font-display font-bold text-white">
                    GB Surveying
                  </span>
                </div>
                <img 
                  src="/rics-footer.png" 
                  alt="RICS Regulated Logo" 
                  className="h-8 w-auto object-contain"
                />
              </div>

              {/* Legal Links */}
              <div className="flex justify-center">
                <div className="flex flex-wrap gap-4 text-sm text-white">
                  <a 
                    href="/disclaimer-and-third-party" 
                    className="hover:text-white/80 transition-colors duration-200"
                  >
                    Disclaimer & Third Party Sites
                  </a>
                  <a 
                    href="/privacy-policy" 
                    className="hover:text-white/80 transition-colors duration-200"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="border-t border-white/20 pt-8">
            <nav className="flex justify-center">
              <ul className="flex flex-wrap gap-8 text-white">
                {menuItems.map((item) => (
                  <li key={item}>
                    <Link
                      to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                      className="hover:text-white/80 transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 pt-8">
            <p className="text-sm text-white text-center">
              © {new Date().getFullYear()} GB Surveying. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
