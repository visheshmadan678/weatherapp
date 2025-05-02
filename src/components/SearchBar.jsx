import { useState } from 'react';
import { FaSearch, FaLocationArrow } from 'react-icons/fa';

function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      setCity('');
    }
  };

  return (
    <div className="mb-12 slide-up">
      <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto">
        <div className="flex items-center overflow-hidden rounded-2xl shadow-lg glass-effect">
          <div className="flex-1 relative">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Search for a project"
              className="w-full px-8 py-6 text-lg text-white bg-transparent placeholder-gray-400 search-input focus:outline-none"
            />
            <FaLocationArrow className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 cursor-pointer hover:text-blue-400 transition-colors" />
          </div>
          <button
            type="submit"
            className="px-8 py-6 bg-blue-600 text-white hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            <FaSearch className="w-6 h-6" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;