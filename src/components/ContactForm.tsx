import { useState } from 'react';

const ContactForm = () => {
  const [postcode, setPostcode] = useState('');
  const [address, setAddress] = useState('');
// form submits shoudl go tinfo@gbsurveying.com
  return (
    <form 
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="space-y-6"
    >
      {/* Hidden fields required by Netlify */}
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
        className="w-full bg-warmGray-900 text-white px-6 py-3 rounded-md hover:bg-warmGray-800 transition-colors duration-200"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm; 