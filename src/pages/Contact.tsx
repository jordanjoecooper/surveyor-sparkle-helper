import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

const Contact = () => {
  return (
    <div className="min-h-screen bg-warmGray-50">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-24 bg-warmGray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactSection />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact; 