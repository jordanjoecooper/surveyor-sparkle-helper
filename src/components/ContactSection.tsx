import { Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

const ContactSection = () => {
  // Create a properly encoded mailto URL
  const mailtoUrl = encodeURI(
    "mailto:info@gbsurveying.com" + 
    "?subject=Survey Quote Request" + 
    "&body=I would like to request a survey quote.\n\n" +
    "Property Address:\n\n" +
    "Postcode:\n\n" +
    "Estate Agent:\n\n" +
    "Asking Price:\n\n" +
    "Property Style:"
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-warmGray-900 mb-6">
          Get in Touch
        </h2>
        <div className="space-y-6">
          <p className="text-warmGray-600">
            Please contact us using the following details. If you would like a no obligation survey quote then please contact us by calling, by email or by completing the contact form, including the address of the property that you are buying, with the postcode, the name of the selling agents, the asking price and the style of property in the Comments box.
          </p>
          
          <div className="space-y-4">
            <a 
              href="tel:+441233367361" 
              className="flex items-center space-x-3 text-warmGray-600 hover:text-warmGray-900 transition-colors duration-200"
            >
              <Phone className="w-5 h-5" />
              <span>Office: 01233 367361</span>
            </a>
            
            <a 
              href={mailtoUrl}
              className="flex items-center space-x-3 text-warmGray-600 hover:text-warmGray-900 transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
              <span>info@gbsurveying.com</span>
            </a>
            
            <a 
              href="https://maps.google.com/?q=Hurstfield,Canterbury+Road,Challock,Ashford,Kent,TN25+4DW" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-3 text-warmGray-600 hover:text-warmGray-900 transition-colors duration-200"
            >
              <MapPin className="w-5 h-5" />
              <span>Ashford, Kent</span>
            </a>
          </div>
        </div>
      </div>
      
      <ContactForm />
    </div>
  );
};

export default ContactSection; 