import { useState } from 'react';

const ContactForm = () => {
  const [postcode, setPostcode] = useState('');
  const [address, setAddress] = useState('');

  return (
    <form className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-warmGray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-3 rounded-md border border-warmGray-300 focus:ring-2 focus:ring-warmGray-400 focus:border-transparent transition-colors duration-200"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-warmGray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-3 rounded-md border border-warmGray-300 focus:ring-2 focus:ring-warmGray-400 focus:border-transparent transition-colors duration-200"
        />
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-warmGray-700 mb-1">
            Address (optional)
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-warmGray-300 focus:ring-2 focus:ring-warmGray-400 focus:border-transparent transition-colors duration-200"
            placeholder="Enter address"
          />
        </div>

        <div>
          <label htmlFor="postcode" className="block text-sm font-medium text-warmGray-700 mb-1">
            Postcode (optional)
          </label>
          <input
            type="text"
            id="postcode"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-warmGray-300 focus:ring-2 focus:ring-warmGray-400 focus:border-transparent transition-colors duration-200"
            placeholder="e.g. SW1A 1AA"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-warmGray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-4 py-3 rounded-md border border-warmGray-300 focus:ring-2 focus:ring-warmGray-400 focus:border-transparent transition-colors duration-200"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-warmGray-900 text-white px-6 py-3 rounded-md hover:bg-warmGray-800 transition-colors duration-200"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm; 