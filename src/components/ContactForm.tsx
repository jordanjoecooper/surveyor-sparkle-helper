import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const [postcode, setPostcode] = useState('');
  const [address, setAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const encode = (data: { [key: string]: string }) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...data as { [key: string]: string }
        })
      });

      if (response.ok) {
        navigate('/form-success');
      } else {
        console.error('Form submission failed:', response.status);
        setError('Form submission failed. Please try again or contact us directly.');
        // Only use email fallback if the error is a network error
        if (!response.ok && response.status === 0) {
          window.location.href = `mailto:info@gbsurveying.com?subject=Contact Form Submission&body=${encodeURIComponent(
            `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\nAddress: ${formData.get('address')}\nPostcode: ${formData.get('postcode')}\nMessage: ${formData.get('message')}`
          )}`;
        }
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setError('Unable to submit form. Please try again or contact us directly.');
      // Use email fallback for network errors
      window.location.href = `mailto:info@gbsurveying.com?subject=Contact Form Submission&body=${encodeURIComponent(
        `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\nAddress: ${formData.get('address')}\nPostcode: ${formData.get('postcode')}\nMessage: ${formData.get('message')}`
      )}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* These hidden inputs are required for Netlify Forms */}
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="subject" value="New Contact Form Submission" />
      <div hidden>
        <input name="bot-field" />
      </div>

      {error && (
        <div className="p-4 text-red-600 bg-red-50 rounded-md">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-warmGray-700 mb-1">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-md border border-warmGray-300 focus:ring-2 focus:ring-warmGray-400 focus:border-transparent transition-colors duration-200"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-warmGray-700 mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-md border border-warmGray-300 focus:ring-2 focus:ring-warmGray-400 focus:border-transparent transition-colors duration-200"
        />
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-warmGray-700 mb-1">
            Address <span className="text-warmGray-500 text-sm">(optional)</span>
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-warmGray-300 focus:ring-2 focus:ring-warmGray-400 focus:border-transparent transition-colors duration-200"
            placeholder="Enter address"
          />
        </div>

        <div>
          <label htmlFor="postcode" className="block text-sm font-medium text-warmGray-700 mb-1">
            Postcode <span className="text-warmGray-500 text-sm">(optional)</span>
          </label>
          <input
            type="text"
            id="postcode"
            name="postcode"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-warmGray-300 focus:ring-2 focus:ring-warmGray-400 focus:border-transparent transition-colors duration-200"
            placeholder="e.g. SW1A 1AA"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-warmGray-700 mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-4 py-3 rounded-md border border-warmGray-300 focus:ring-2 focus:ring-warmGray-400 focus:border-transparent transition-colors duration-200"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-[#08979f] text-white px-6 py-3 rounded-md transition-colors duration-200 ${
          isSubmitting 
            ? 'opacity-75 cursor-not-allowed' 
            : 'hover:bg-[#078087]'
        }`}
      >
        {isSubmitting ? 'Sending...' : 'Submit'}
      </button>
    </form>
  );
};

export default ContactForm; 