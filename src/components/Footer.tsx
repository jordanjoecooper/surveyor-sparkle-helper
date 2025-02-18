
const Footer = () => {
  return (
    <footer className="bg-warmGray-900 text-warmGray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-display text-lg font-bold mb-4">GB Surveying</h3>
            <p className="text-sm">
              Professional building surveyors providing comprehensive property surveys in Ashford, Kent.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-display text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/disclaimer" 
                  className="text-sm hover:text-white transition-colors duration-200"
                >
                  Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="/third-party-sites" 
                  className="text-sm hover:text-white transition-colors duration-200"
                >
                  Third Party Sites
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-display text-lg font-bold mb-4">Contact</h3>
            <address className="text-sm not-italic">
              <p>Ashford, Kent</p>
              <p>+44 (0) 1234 567890</p>
              <p>info@gbsurveying.com</p>
            </address>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-warmGray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} GB Surveying. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
