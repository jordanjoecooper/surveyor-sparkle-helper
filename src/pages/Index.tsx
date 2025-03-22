import { Building, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import ContactForm from '../components/ContactForm';
import ContactSection from '../components/ContactSection';
import { Link } from 'react-router-dom';

const Index = () => {
  const services = [
    {
      title: "Building Surveying",
      description: "Comprehensive building surveys and detailed property inspections for residential and commercial properties.",
      icon: "🏗️"
    },
    {
      title: "General Property Advice",
      description: "Expert guidance on property matters, maintenance, and improvements to help you make informed decisions.",
      icon: "📋"
    },
    {
      title: "Improvement Advice",
      description: "Professional recommendations for property improvements and renovations to enhance value and functionality.",
      icon: "🔨"
    },
    {
      title: "Defects Analysis",
      description: "Thorough investigation and analysis of building defects with detailed reports and remediation recommendations.",
      icon: "🔍"
    }
  ];

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
      <section className="py-24 bg-warmGray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-warmGray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-warmGray-600 max-w-2xl mx-auto">
              Professional surveying services tailored to your needs, delivered with expertise and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 text-center"
              >
                <div className="text-4xl mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-warmGray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-warmGray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-warmGray-900 font-medium hover:text-warmGray-700 transition-colors duration-200"
            >
              View all services
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
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
