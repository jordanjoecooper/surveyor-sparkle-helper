import { useState } from 'react';

const ContactForm = () => {
  const [postcode, setPostcode] = useState('');
  const [address, setAddress] = useState('');
  const [addresses, setAddresses] = useState<Array<string>>([]);
  const [lookupError, setLookupError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const lookupPostcode = async () => {
    if (!postcode) return;
    
    setIsLoading(true);
    setLookupError(false);
    
    try {
      const response = await fetch(`https://api.postcodes.io/postcodes/${postcode}`);
      if (!response.ok) throw new Error('Postcode not found');
      
      const data = await response.json();
      const formattedAddress = [
        data.result.thoroughfare,
        data.result.post_town,
        data.result.postcode
      ].filter(Boolean).join(', ');
      
      setAddresses([formattedAddress]);
      setLookupError(false);
    } catch (error) {
      console.error('Postcode lookup failed:', error);
      setLookupError(true);
    } finally {
      setIsLoading(false);
    }
  };

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

      <div>
        <label htmlFor="postcode" className="block text-sm font-medium text-warmGray-700 mb-1">
          Postcode (optional)
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            id="postcode"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            className="flex-1 px-4 py-3 rounded-md border border-warmGray-300 focus:ring-2 focus:ring-warmGray-400 focus:border-transparent transition-colors duration-200"
            placeholder="e.g. SW1A 1AA"
          />
          <button
            type="button"
            onClick={lookupPostcode}
            disabled={isLoading}
            className="px-4 py-2 bg-warmGray-700 text-white rounded-md hover:bg-warmGray-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Loading...' : 'Find'}
          </button>
        </div>
        {lookupError && (
          <p className="mt-1 text-sm text-warmGray-500">
            Couldn't find address. You can enter it manually below.
          </p>
        )}
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-warmGray-700 mb-1">
          Address (optional)
        </label>
        {addresses.length > 0 ? (
          <select
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-warmGray-300 focus:ring-2 focus:ring-warmGray-400 focus:border-transparent transition-colors duration-200"
          >
            <option value="">Select address</option>
            {addresses.map((addr, index) => (
              <option key={index} value={addr}>
                {addr}
              </option>
            ))}
          </select>
        ) : (
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-warmGray-300 focus:ring-2 focus:ring-warmGray-400 focus:border-transparent transition-colors duration-200"
            placeholder="Enter address manually"
          />
        )}
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