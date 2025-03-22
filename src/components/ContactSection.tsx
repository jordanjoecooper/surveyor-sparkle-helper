import { Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

const ContactSection = () => {
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
            {[
              {
                icon: <Phone className="w-5 h-5" />,
                text: "+44 (0) 1234 567890",
              },
              {
                icon: <Mail className="w-5 h-5" />,
                text: "info@gbsurveying.com",
              },
              {
                icon: <MapPin className="w-5 h-5" />,
                text: "Ashford, Kent",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 text-warmGray-600">
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <ContactForm />
    </div>
  );
};

export default ContactSection; 