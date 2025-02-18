
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ThirdPartySites = () => {
  return (
    <div className="min-h-screen bg-warmGray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-warmGray-900 mb-8">
            Third Party Sites
          </h1>
          
          <div className="prose prose-warmGray max-w-none">
            <p className="text-warmGray-600 leading-relaxed">
              This website may contain links to websites operated by third parties. Such links are provided for your convenience only and we have no control over their individual content. We therefore make no warranties or representations as to the accuracy or completeness of any of the information appearing in relation to any linked websites nor as to the suitability or quality of any of their products or services. The provision of links to third party sites does not imply any endorsement of the sites or those that control them.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ThirdPartySites;
