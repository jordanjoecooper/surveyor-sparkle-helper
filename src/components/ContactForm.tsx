import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const [postcode, setPostcode] = useState('');
  const [address, setAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      });

      if (response.ok) {
        navigate('/form-success');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      alert('Sorry, there was a problem submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* These hidden inputs are required for Netlify Forms with JavaScript */}
      <input type="hidden" name="form-name" value="contact" />
      <div hidden>
        <input name="bot-field" />
      </div>

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
        className={`w-full bg-warmGray-900 text-white px-6 py-3 rounded-md transition-colors duration-200 ${
          isSubmitting 
            ? 'opacity-75 cursor-not-allowed' 
            : 'hover:bg-warmGray-800'
        }`}
      >
        {isSubmitting ? 'Sending...' : 'Submit'}
      </button>
    </form>
  );
};

export default ContactForm; 