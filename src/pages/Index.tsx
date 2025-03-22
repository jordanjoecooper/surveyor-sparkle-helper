import { Building, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import ContactForm from '../components/ContactForm';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-warmGray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/splash-1.jpg"
            alt="Modern building facade"
            className="w-full h-full object-cover object-[center_10%]"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block animate-fade-up text-white/90 text-sm font-medium tracking-wider uppercase mb-4">
            Professional Building Surveyors
          </span>
          <h1 className="animate-fade-up text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Expert Property Surveys in Kent
          </h1>
          <p className="animate-fade-up text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Comprehensive building surveys and professional advice for residential and commercial properties
          </p>
          <a
            href="#contact"
            className="animate-fade-up inline-block bg-white text-warmGray-900 px-8 py-4 rounded-md font-medium hover:bg-warmGray-100 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-warmGray-900 mb-4">
              Our Services
            </h2>
            <p className="text-warmGray-600 max-w-2xl mx-auto">
              Comprehensive building surveying services tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Building Surveys",
                description: "Detailed analysis of property condition and structure",
                icon: <Building className="w-6 h-6" />,
              },
              {
                title: "Property Valuations",
                description: "Accurate market value assessments for all property types",
                icon: <MapPin className="w-6 h-6" />,
              },
              {
                title: "Project Management",
                description: "End-to-end oversight of building projects",
                icon: <Clock className="w-6 h-6" />,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-warmGray-50 rounded-lg hover:bg-warmGray-100 transition-colors duration-200"
              >
                <div className="text-warmGray-700 mb-4 group-hover:text-warmGray-900">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-warmGray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-warmGray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-warmGray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactSection />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
