const Footer = () => {
  return (
    <footer className="bg-warmGray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-warmGray-400">
              © {new Date().getFullYear()} GB Surveying. All rights reserved.
            </p>
          </div>
          <div className="flex justify-end">
            <img 
              src="/rics-footer.png" 
              alt="RICS Regulated Logo" 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
